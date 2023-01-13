import React, { createContext, ReactNode, useContext, useState } from "react";

import { toast } from "react-toastify";
import api from "../services/api";

export type LoginProps = {
  email: string;
  password: string;
};

export type ClientProps = {
  id: number;
  name: string;
  document: string;
  bank: {
    code: string;
    bankName: string;
    agency: string;
    account: string;
  };
};

export type NewClientProps = {
  name: string;
  documentType: string;
  document: string;
  bankName: string;
  agency: string;
  account: string;
};

export type UpdateClientProps = {
  name: string;
  document: string;
  bankName: string;
  agency: string;
  account: string;
};

export type ClientsContextProps = {
  clients: ClientProps[] | null;
  totalPages: number;
  getClients: (text: string) => Promise<void>;
  getClient: (id: number) => Promise<ClientProps>;
  updateClient: (id: number, data: NewClientProps) => Promise<void>;
  newClient: (data: NewClientProps) => Promise<void>;
};

type ClientsProviderProps = {
  children: ReactNode;
};

export const ClientsContext = createContext({} as ClientsContextProps);

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState<ClientProps[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  const getClients = async (text: string) => {
    try {
      const { data } = await api.get(`bankAccounts?name_like=${text}`);
      setClients(data);
      setTotalPages(Math.ceil(data.length / 10));
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const getClient = async (id: number) => {
    try {
      const { data } = await api.get(`bankAccounts/${id}`);
      return data;
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const newClient = async (data: NewClientProps) => {
    try {
      await api.post("bankAccounts", {
        name: data.name,
        document: data.document,
        bank: {
          bankName: data.bankName,
          code: data.bankName.split(" - ")[0],
          agency: data.agency,
          account: data.account,
        },
      });
      await getClients("");

      toast.success("O cliente foi cadastrado");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const updateClient = async (id: number, data: UpdateClientProps) => {
    try {
      await api.put(`bankAccounts/${id}`, {
        name: data.name,
        document: data.document,
        bank: {
          bankName: data.bankName,
          code: data.bankName.split(" - ")[0],
          agency: data.agency,
          account: data.account,
        },
      });
      await getClients("");

      toast.success("Dados do cliente atualizados");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        totalPages,
        getClients,
        getClient,
        newClient,
        updateClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export function useClients() {
  const context = useContext(ClientsContext);
  return context;
}

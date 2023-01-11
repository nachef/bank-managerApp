import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../services/api/api";
import { getStorage, removeStorage, setStorage } from "../services/api/storage";

import { destroyCookie, parseCookies, setCookie } from "nookies";
import { toast } from "react-toastify";

export type LoginProps = {
  email: string;
  password: string;
};

export type AccountProps = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

export type AccountContextProps = {
  account: AccountProps | null;

  pushLogout: () => void;
  pushLogin: (props: LoginProps) => Promise<void>;
};

type AccountProviderProps = {
  children: ReactNode;
};

export const AccountContext = createContext({} as AccountContextProps);

export function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState<AccountProps | null>(null);

  useEffect(() => {
    const { "@q2:password": token } = parseCookies();
    getStorage("@q2:email").then((data) => {
      if (token && data) {
        setAccount(JSON.parse(data));
      }
    });
  }, []);

  const pushLogout = () => {
    setAccount(null);
    removeStorage("@q2:email");
    destroyCookie(undefined, "@q2:password", {
      path: "/",
    });
  };

  const pushLogin = async ({ email, password }: LoginProps) => {
    try {
      const { data } = await api.post("signin", {
        email,
        password,
      });

      setCookie(undefined, "@q2:password", data.accessToken, {
        maxAge: 14 * 24 * 60 * 60,
        path: "/",
      });
      setStorage("@q2:email", JSON.stringify(data.user));
      setAccount(data.user);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        pushLogout,
        pushLogin,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);
  return context;
}

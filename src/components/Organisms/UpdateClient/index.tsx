import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import { useClients } from "../../../contexts/clients";
import { UpdateClientSchema } from "../../../schemas/ClientRegistration/clients";
import api from "../../../services/api";
import { HyphenAndNumbers, Numbers } from "../../../utils/validations";
import ClientButton from "../../Atoms/ClientButton";
import Input from "../../Molecules/Input";
import { Dropdown } from "../DropDownDefault";

import { BiUser } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";

import Line from "../Line";
import Sidebar from "../Sidebar";

import * as C from "./styles";
import { CloseButtonField } from "../CreateClient/styles";
import CloseButton from "../../Atoms/CloseButton";

export type UpdateClientProps = {
  clientData: number | null;
  visible: boolean;
  onClose: () => void;
};

type ClientProps = {
  id: number;
  name: string;
  document: string;
  bank: {
    bankName: string;
    code: string;
    agency: string;
    account: string;
  };
};

const UpdateClient = ({ clientData, visible, onClose }: UpdateClientProps) => {
  const { getClient, updateClient } = useClients();
  const [client, setClient] = useState<ClientProps | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [banks, setBanks] = useState<string[]>([]);

  useEffect(() => {
    api.get("Banklist").then((response) => {
      const arrayOfBanks = response.data.map(
        (bank: any) => `${bank.code} - ${bank.bank}`
      );
      setBanks(arrayOfBanks);
    });
  }, []);

  useEffect(() => {
    setClient(null);
    if (clientData) {
      getClient(clientData).then((data) => {
        setClient(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientData]);

  return (
    <Sidebar visible={visible && !!client} onClose={onClose}>
      <C.Container>
        <CloseButtonField>
          <CloseButton
            title="Fechar"
            onClick={() => {
              onClose();
            }}
          />
        </CloseButtonField>
        <C.Title>Atualizar cliente</C.Title>
        {client && (
          <Formik
            initialValues={{
              name: client?.name,
              document: client?.document,
              bankName: client?.bank.bankName,
              agency: client?.bank.agency,
              account: client?.bank.account,
            }}
            validationSchema={UpdateClientSchema}
            validateOnChange={true}
            onSubmit={(values, { resetForm }) => {
              setLoading(true);
              updateClient(client?.id, values)
                .then(() => {
                  onClose();
                  resetForm();
                })
                .finally(() => setTimeout(() => setLoading(false), 500));
            }}
          >
            {({
              handleSubmit,
              setFieldValue,
              setFieldError,
              resetForm,
              values,
              errors,
            }) => (
              <form onSubmit={handleSubmit}>
                <C.SectionForm>
                  <C.TitleSection>Cadastro pessoal</C.TitleSection>
                  <C.InputsContainer>
                    <Input
                      name="name"
                      id="name"
                      label="Nome"
                      placeholder="Digite o nome"
                      value={values.name}
                      error={errors.name}
                      iconLeft={<BiUser />}
                      onChange={(e) => {
                        setFieldValue("name", e.target.value);
                      }}
                    />
                    <Input
                      name="document"
                      id="document"
                      label="Documento"
                      placeholder="Digite o documento"
                      value={values.document}
                      error={errors.document}
                      iconLeft={<BiUser />}
                      disabled={true}
                    />
                  </C.InputsContainer>
                </C.SectionForm>
                <Line />
                <C.SectionForm>
                  <C.TitleSection>Cadastro bancário</C.TitleSection>
                  <C.InputsContainer>
                    <Dropdown
                      label="Banco"
                      value={values.bankName}
                      placeholder="Selecione o Banco"
                      options={banks}
                      onSelect={(value) => {
                        setFieldValue("bankName", value);
                        setFieldError("bankName", "");
                      }}
                      error={errors.bankName}
                    />
                    <Input
                      name="agency"
                      id="agency"
                      label="Documento"
                      placeholder="Digite a agência"
                      value={values.agency}
                      error={errors.agency}
                      iconLeft={<AiOutlineBank />}
                      maxLength={4}
                      onChange={(e) => {
                        const value = Numbers(e.target.value);
                        setFieldValue("agency", value);
                      }}
                    />
                    <Input
                      name="account"
                      id="account"
                      label="Número da Conta"
                      placeholder="Digite o número da conta"
                      value={values.account}
                      error={errors.account}
                      iconLeft={<AiOutlineBank />}
                      maxLength={12}
                      onChange={(e) => {
                        const value = HyphenAndNumbers(e.target.value);
                        setFieldValue("account", value);
                      }}
                    />
                  </C.InputsContainer>
                </C.SectionForm>
                <C.ButtonWrapper>
                  <ClientButton
                    type="submit"
                    title="Atualizar"
                    width={50}
                    disabled={
                      !values.name ||
                      !values.document ||
                      !values.bankName ||
                      !values.agency ||
                      !values.account ||
                      !!errors.name ||
                      !!errors.document ||
                      !!errors.bankName ||
                      !!errors.agency ||
                      !!errors.account ||
                      isLoading
                    }
                  />
                </C.ButtonWrapper>
              </form>
            )}
          </Formik>
        )}
      </C.Container>
    </Sidebar>
  );
};

export default UpdateClient;

import React, { useEffect, useState } from "react";

import { Formik } from "formik";

import { Dropdown } from "../DropDownDefault";
import Input from "../../Molecules/Input";
import Line from "../Line";
import Sidebar from "../Sidebar";

import { useClients } from "../../../contexts/clients";
import api from "../../../services/api";
import { maskCnpj, maskCpf } from "../../../utils/masks";
import { HyphenAndNumbers, Numbers } from "../../../utils/validations";
import { CreateClientsSchema } from "../../../schemas/ClientRegistration/clients";

import { AiOutlineBank } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

import ClientButton from "../../Atoms/ClientButton";

import * as C from "./styles";
import CloseButton from "../../Atoms/CloseButton";

export type CreateCustomerProps = {
  visible: boolean;
  onClose: () => void;
};

export default function CreateClient({
  visible,
  onClose,
}: CreateCustomerProps) {
  const { newClient } = useClients();
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

  return (
    <Sidebar visible={visible} onClose={onClose}>
      <C.Container>
        <C.CloseButtonField>
          <CloseButton
            title={"Fechar"}
            onClick={() => {
              onClose();
            }}
          />
        </C.CloseButtonField>
        <C.Title>Novo cliente</C.Title>
        <Formik
          initialValues={{
            name: "",
            documentType: "",
            document: "",
            bankName: "",
            agency: "",
            account: "",
          }}
          validationSchema={CreateClientsSchema}
          validateOnChange={true}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            newClient(values)
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
                <C.TitleSection>Informações pessoais</C.TitleSection>
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
                  <Dropdown
                    label="Tipo"
                    value={values.documentType}
                    placeholder="Selecione o Tipo"
                    options={["Pessoa física", "Pessoa jurídica"]}
                    onSelect={(value: any) => {
                      setFieldValue("documentType", value);
                      setFieldError("documentType", "");
                      setFieldValue("document", "");
                    }}
                    error={errors.documentType}
                  />
                  <Input
                    name="document"
                    id="document"
                    label="Documento"
                    placeholder="Digite o documento"
                    value={values.document}
                    error={errors.document}
                    iconLeft={<BiUser />}
                    maxLength={
                      values.documentType === "Pessoa física" ? 14 : 18
                    }
                    onChange={(e) => {
                      const value = Numbers(e.target.value);
                      if (values.documentType === "Pessoa física") {
                        const newValue = maskCpf(value);
                        setFieldValue("document", newValue);
                      } else {
                        const newValue = maskCnpj(value);
                        setFieldValue("document", newValue);
                      }
                    }}
                  />
                </C.InputsContainer>
              </C.SectionForm>
              <Line />
              <C.SectionForm>
                <C.TitleSection>Informações bancárias</C.TitleSection>
                <C.InputsContainer>
                  <Dropdown
                    label="Banco"
                    value={values.bankName}
                    placeholder="Selecione o Banco"
                    options={banks}
                    onSelect={(value: any) => {
                      setFieldValue("bankName", value);
                      setFieldError("bankName", "");
                    }}
                    error={errors.bankName}
                  />
                  <Input
                    name="agency"
                    id="agency"
                    label="Documento"
                    placeholder="Digite a agencia"
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
                    label="Numero da Conta"
                    placeholder="Digite o numero da conta"
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
              <C.ButtonField>
                <ClientButton
                  type="submit"
                  title="Cadastrar"
                  disabled={
                    !values.name ||
                    !values.documentType ||
                    !values.document ||
                    !values.bankName ||
                    !values.agency ||
                    !values.account ||
                    !!errors.name ||
                    !!errors.documentType ||
                    !!errors.document ||
                    !!errors.bankName ||
                    !!errors.agency ||
                    !!errors.account ||
                    isLoading
                  }
                />
              </C.ButtonField>
            </form>
          )}
        </Formik>
      </C.Container>
    </Sidebar>
  );
}

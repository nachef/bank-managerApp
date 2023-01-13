import React, { useEffect, useState } from "react";

import { Formik } from "formik";

import Button from "../../Molecules/Button";
import { Dropdown } from "../DropDown";
import Input from "../../Molecules/Input";
import Line from "../Line";
import Sidebar from "../Sidebar";

import { useClients } from "../../../contexts/clients";

import api from "../../../services/api";
import { maskCnpj, maskCpf } from "../../../utils/masks";
import { Numbers } from "../../../utils/validations";
import { CreateClientsSchema } from "../../../schemas/ClientRegistration/clients";

import { AiOutlineBank } from "react-icons/ai";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import * as C from "./styles";

export type CreateCustomerProps = {
  visible: boolean;
  onClose: () => void;
};

const CreateCustomer = ({ visible, onClose }: CreateCustomerProps) => {
  const { newClient } = useClients();
  const [isLoading, setLoading] = useState(false);
  const [banks, setBanks] = useState<string[]>([]);

  useEffect(() => {
    api.get("listBanks").then((response) => {
      const arrayOfBanks = response.data.map(
        (bank: any) => `${bank.code} - ${bank.bank}`
      );
      setBanks(arrayOfBanks);
    });
  }, []);

  return (
    <Sidebar visible={visible} onClose={onClose}>
      <C.Container>
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
                <C.TitleSection>Informação pessoal</C.TitleSection>
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
                    onSelect={(value) => {
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
                <C.TitleSection>Informação bancaria</C.TitleSection>
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
                      const value = Numbers(e.target.value);
                      setFieldValue("account", value);
                    }}
                  />
                </C.InputsContainer>
              </C.SectionForm>
              <C.ButtonWrapper>
                <Button
                  type="button"
                  title="Cancelar"
                  onClick={() => {
                    onClose();
                    resetForm();
                  }}
                  width={50}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  title="Cadastrar"
                  width={50}
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
              </C.ButtonWrapper>
            </form>
          )}
        </Formik>
      </C.Container>
    </Sidebar>
  );
};

export default CreateCustomer;

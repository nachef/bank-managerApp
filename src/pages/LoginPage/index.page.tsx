import React, { useState } from "react";

import { useRouter } from "next/router";
import { Formik } from "formik";

import EmailIcon from "../../assets/icons/mail.svg";
import PasswordIcon from "../../assets/icons/lock.svg";
import { useAccount } from "../../contexts/logincontext";
import Input from "../../components/Molecules/Input";
import Button from "../../components/Molecules/Button";
import LoginHeader from "../../components/Molecules/LoginHeader";
import { LoginSchema } from "../../schemas/Login/login";
import { withSSRGuest } from "../../hooks/SSRGuest";
import * as C from "./styles";
import { NextPage } from "next";

const Login: NextPage = () => {
  const router = useRouter();
  const { pushLogin } = useAccount();
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <C.Container>
        <LoginHeader
          title="Acesse sua conta"
          description="Preencha os dados de acesso abaixo"
        />
        <C.FormField>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            validateOnChange={true}
            onSubmit={(values) => {
              setLoading(true);
              pushLogin(values)
                .then(() => {
                  router.push("/");
                })
                .finally(() => {
                  setTimeout(() => setLoading(false), 500);
                });
            }}
          >
            {({ handleSubmit, setFieldValue, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <C.InputsField>
                  <Input
                    name="email"
                    id="email"
                    label="E-mail"
                    placeholder="Digite o e-mail"
                    value={values.email}
                    error={errors.email}
                    iconLeft={<EmailIcon />}
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                    }}
                  />
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    label="Senha"
                    placeholder="Digite a senha"
                    value={values.password}
                    error={errors.password}
                    iconLeft={<PasswordIcon />}
                    onChange={(e) => {
                      setFieldValue("password", e.target.value);
                    }}
                    secret
                  />
                </C.InputsField>
                <C.ButtonField>
                  <Button
                    type="submit"
                    title="Entrar"
                    width={45}
                    disabled={
                      !values.email ||
                      !values.password ||
                      !!errors.email ||
                      !!errors.password ||
                      isLoading
                    }
                  />
                </C.ButtonField>
              </form>
            )}
          </Formik>
        </C.FormField>
        <C.CreateAccountField>
          <C.AccountText>Não possui uma conta?</C.AccountText>
          <C.CreateAccount>Criar conta</C.CreateAccount>
        </C.CreateAccountField>
      </C.Container>
    </>
  );
};
export default Login;
export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} };
});
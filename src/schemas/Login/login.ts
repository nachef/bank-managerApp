import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido, insira novamente")
    .required("O email é obrigatório!"),
  password: yup
    .string()
    .min(8, ({ min }) => `Sua senha deve ter no mínimo ${min} caracteres.`)
    .required("É obrigatório inserir uma senha!"),
});

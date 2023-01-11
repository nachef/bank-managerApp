import * as yup from "yup";

import { CpfValidation, validationName } from "../../utils/validations";

export const CreateClientsSchema = yup.object().shape({
  name: yup
    .string()
    .required("o nome é obrigatório.")
    .test("is-valid", "seu nome está incompleto", (value) =>
      value ? validationName(value) : false
    ),
  documentType: yup.string(),
  document: yup
    .string()
    .required("o documento é obrigatório.")
    .test("is-valid", "este documento não é válido.", (value) =>
      value && value.length <= 14 ? CpfValidation(value) : true
    ),
  bankName: yup.string().required("o banco é obrigatório."),
  agency: yup
    .string()
    .required("a agencia é obrigatória.")
    .min(4, "a agencia deve ter no mínimo 4 dígitos.")
    .max(4, "a agencia deve ter no máximo 4 dígitos."),
  account: yup
    .string()
    .required("o numero da conta é obrigatório.")
    .min(5, "o numero da conta deve ter no mínimo 5 dígitos.")
    .max(12, "o numero da conta deve ter no máximo 12 dígitos."),
});

export const UpdateClientSchema = yup.object().shape({
  name: yup
    .string()
    .required("o nome é obrigatório.")
    .test("is-valid", "o nome está incompleto", (value) =>
      value ? validationName(value) : false
    ),
  document: yup
    .string()
    .required("o documento é obrigatório.")
    .test("is-valid", "este documento é invalido.", (value) =>
      value && value.length <= 14 ? CpfValidation(value) : true
    ),
  bankName: yup.string().required("o banco é obrigatório."),
  agency: yup
    .string()
    .required("a agencia é obrigatória.")
    .min(4, "a agencia deve ter no mínimo 4 dígitos.")
    .max(4, "a agencia deve ter no máximo 4 dígitos."),
  account: yup
    .string()
    .required("o numero da conta é obrigatório.")
    .min(5, "o numero da conta deve ter no mínimo 5 dígitos.")
    .max(12, "o numero da conta deve ter no máximo 12 dígitos."),
});

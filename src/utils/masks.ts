import { LettersAndNumbers } from "./validations";

export function clearMask(value: string) {
  const removeChar = value.replace(/(\.|\/|-)/g, "");
  return removeChar.replace("(", "").replace(")", "");
}

export function maskCpf(cpf: string) {
  const num = cpf.replace(/[^\d]/g, "");
  const length = num.length;

  if (length <= 6) {
    cpf = num.replace(/(\d{3})(\d{1,3})/g, "$1.$2");
  } else if (length <= 9) {
    cpf = num.replace(/(\d{3})(\d{3})(\d{1,3})/g, "$1.$2.$3");
  } else if (length <= 11) {
    cpf = num.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, "$1.$2.$3-$4");
  } else if (length >= 12) {
    cpf = cpf.substr(0, 14);
  }

  return cpf;
}

export function maskCnpj(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, "");
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");

  return cnpj;
}

export function maskPassport(passport: string): string {
  const validPassport = LettersAndNumbers(passport);

  if (validPassport.length >= 13) {
    return validPassport.substr(0, 13);
  }

  return validPassport;
}

export function maskCep(cep: string) {
  const num = cep.replace(/[^\d]/g, "");
  const length = num.length;

  if (length <= 8) {
    cep = num.replace(/(\d{5})(\d{1,3})/g, "$1-$2");
  } else if (length >= 9) {
    cep = cep.substr(0, 9);
  }

  return cep;
}

export function maskDate(date: string) {
  const num = date.replace(/[^\d]/g, "");
  const { length } = num;

  if (length <= 4) {
    date = num.replace(/(\d{2})(\d{1,2})/g, "$1/$2");
  } else if (length <= 9) {
    date = num.replace(/(\d{2})(\d{2})(\d{1,4})/g, "$1/$2/$3");
  }

  return date;
}

function CpfValidation(cpf: string) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/gim, "");

  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    return false;
  }
  let plus = 0;
  let rest;
  for (let i = 1; i <= 9; i++)
    plus = plus + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (plus * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;
  plus = 0;
  for (let i = 1; i <= 10; i++)
    plus = plus + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (plus * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function validatePassport(passport: string) {
  if (passport.length >= 3) {
    return true;
  }
  return false;
}

function validationDate(date: string) {
  const dateWithout1Char = date.split("/");
  const dateFormat = `${dateWithout1Char[2]}-${dateWithout1Char[1]}-${dateWithout1Char[0]}`;
  const dateDate = new Date(dateFormat + "T00:00:00");
  if (dateDate.getTime() && dateDate <= new Date()) return true;
  return false;
}

function validationName(name: string) {
  const nameOnlyLetters = Letters(name);

  if (nameOnlyLetters) {
    const nameSplitted = name.trim().split(" ");
    if (nameSplitted.length >= 2) {
      const firstName = nameSplitted[0];
      const lastName = nameSplitted[nameSplitted.length - 1];
      if (firstName.length >= 2 && lastName.length >= 2) return true;
    }
  }

  return false;
}

function Numbers(phrase: string) {
  const removedNumbers = phrase.replace(/\D/g, "");
  const removedSpecialCharacters = removedNumbers.replace(
    /[&/\\#,+()$~%.'":*?<>{}[\]@!]/g,
    ""
  );

  return removedSpecialCharacters;
}

function HyphenAndNumbers(phrase: string) {
  const removedNumbers = phrase.replace(/\D/g, "");
  const removedSpecialCharacters = removedNumbers.replace(
    /[&/\\#,+()$~%.'":*?<>{}[\]@!]/g,
    ""
  );

  if (removedSpecialCharacters.length <= 1) {
    return removedSpecialCharacters;
  }

  const lastTwoNumbers = removedSpecialCharacters.slice(-1);
  const restOfNumbers = removedSpecialCharacters.slice(0, -1);

  return restOfNumbers.concat("-", lastTwoNumbers);
}

function Letters(phrase: string) {
  const removedNumbers = phrase.replace(/[\d]/g, "");
  const removedSpecialCharacters = removedNumbers.replace(
    /[&/\\#,+()$~%.'":*?<>{}[\]@!]/g,
    ""
  );
  return removedSpecialCharacters;
}

function LettersAndNumbers(phrase: string) {
  const removedSpecialCharacters = phrase.replace(
    /[&/\\#,+()$~%.'":*?<>{}[\]@!-]/g,
    ""
  );
  return removedSpecialCharacters;
}

export {
  CpfValidation,
  validatePassport,
  validationDate,
  validationName,
  Numbers,
  HyphenAndNumbers,
  Letters,
  LettersAndNumbers,
};

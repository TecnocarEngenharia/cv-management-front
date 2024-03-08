export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");

  if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
    return value;
  }

  const formattedPhoneNumber = `(${phoneNumber.slice(
    0,
    2
  )}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  return formattedPhoneNumber;
};

export const formatCPF = (value : string) => {
  const cpf = value.replace(/\D/g, "");

  if (!cpf || !/^\d+$/.test(cpf)) {
    return value;
  }

  const formattedCPF = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
    6,
    9
  )}-${cpf.slice(9, 11)}`;
  return formattedCPF;
};

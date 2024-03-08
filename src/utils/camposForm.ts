import { Candidate } from "../types/candidate.types";

interface Field {
  label: string;
  field: keyof Candidate;
  type?: string;
  class?: string;
  placeholder?: string;
}

export const fields: Field[] = [
  { label: "Profissional", field: "profissional", placeholder: "Informe seu nome" },
  { label: "Data de Nascimento", field: "data_de_nascimento", type: "Date", placeholder: "Informe sua data de nascimento", class:"data"},
  { label: "CPF", field: "cpf", placeholder: "Informe seu CPF" },
  { label: "E-mail", field: "email", placeholder: "Informe seu e-mail" },
  { label: "Contato", field: "telefone", placeholder: "Informe seu número de telefone" },
];

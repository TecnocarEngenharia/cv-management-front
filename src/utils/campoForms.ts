import { Candidate } from "../types/candidate.types";

interface FieldRadio {
  label: string;
  field: keyof Candidate;
  type?: string;
  options?: string[];
  class?: string;
  optionsTwo?: string[];
}

export const camposSelect: FieldRadio[] = [
  {
    label: "Atualmente Empregado?",
    type: "select",
    field: "esta_empregado",
    options: [" ", "Sim", "Não"],
    class: "esta_empregado",
  },
  {
    label: "Nome da Empresa Atual",
    field: "empresa_atual",
    type: "text",
  },
  {
    label: "Salário Atual",
    field: "salario_atual",
    type: "text",
  },
  {
    label: "Ultimo Salário",
    field: "ultimo_salario",
    type: "text",
  },

  {
    label: "Possui Experiência no Segmento Automotivo?",
    type: "select",
    field: "experiencia_ramo_automotivo",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Situação Atual de Trabalho",
    field: "modalidade_atual",
    type: "select",
    options: [
      " ",
      "CLT",
      "Desempregado",
      "Estagiário",
      "Prestador de serviços",
    ],
    optionsTwo: [" ", "CLT", "Estagiário", "Prestador de serviços"],
  },

  {
    label: "Valor Hora Recebida",
    field: "salario_hora",
    type: "text",
  },
  {
    label: "Vaga da candidatura",
    type: "select",
    field: "tipo_desejado_linkedin",
    options: [
      " ",
      "Analista de Gestão de Manutenção",
      "Analista de Supply Chain",
      "Analista de Exportação",
    ],
  },
  {
    label: "Nível Atual de Experiência",
    field: "nivel_funcao",
    type: "select",
    options: [" ", "Júnior", "Pleno", "Sênior"],
  },
  {
    label: "Tem Interesse Imediato na Ocupação da Vaga?",
    field: "interesse_imediato",
    type: "select",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Curso de Formação",
    field: "formacao",
    type: "select",
    options: [
      " ",
      "Administração",
      "Analise e Desenvolvimento de Sistemas",
      "Ciência da Computação",
      "Ciências da Informação",
      "Design Gráfico",
      "Engenharia Aeroespacial",
      "Engenharia de Automação",
      "Engenharia Civil",
      "Engenharia de Produção",
      "Engenharia de Qualidade",
      "Engenharia de Software",
      "Engenharia de Telecomunicações",
      "Engenharia Elétrica",
      "Engenharia Mecânica",
      "Engenharia Química",
      "Ensino Médio",
      "Marketing",
    ],
  },
];

export const camposDisponibilidadeForm: FieldRadio[] = [
  {
    label: "Disponibilidade para Entrevistas Online",
    type: "select",
    field: "entrevista_online",
    options: [" ", "Manhã", "Tarde", "Noite"],
  },
  {
    label: "Disponibilidade para Testes Técnicos Online (Seg a Sex)",
    type: "select",
    field: "teste_tecnico",
    options: [" ", "09:00 as 10:00hs", "12:00 as 13:00hs", "18:00 as 19:00hs"],
  },
  {
    label: "Possui CNPJ Ativo?",
    type: "select",
    field: "cnpj",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Tipo de CNPJ",
    type: "select",
    field: "tipo_cnpj",
    options: [" ", "Mei", "ME / Eirelli / Ltda"],
  },
];
export const conhecimentoIdiomas: FieldRadio[] = [
  {
    label: "Conversação em Inglês",
    type: "select",
    field: "conhecimento_ingles",
    options: [" ", "Básico", "Intermediário", "Avançado", "Fluente", "N/A"],
  },
  {
    label: "Conversação em Francês",
    type: "select",
    field: "conhecimento_frances",
    options: [" ", "Básico", "Intermediário", "Avançado", "Fluente", "N/A"],
  },
  {
    label: "Conversação em Italiano",
    type: "select",
    field: "conhecimento_italiano",
    options: [" ", "Básico", "Intermediário", "Avançado", "Fluente", "N/A"],
  },
  {
    label: "Conversação em Espanhol",
    type: "select",
    field: "conhecimento_espanhol",
    options: [" ", "Básico", "Intermediário", "Avançado", "Fluente", "N/A"],
  },
];

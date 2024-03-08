export const validarDados = (dados: any) => {
  const {
    profissional,
    data_de_nascimento,
    cpf,
    cidade,
    uf,
    telefone,
    email,
    esta_empregado,
    experiencia_ramo_automotivo,
    modalidade_atual,
    tipo_desejado_linkedin,
    nivel_funcao,
    formacao,
    interesse_imediato,
    entrevista_online,
    teste_tecnico,
    conhecimento_ingles,
    pretensao_salarial,
    pretensao_pj,
    cnpj,
    vaga_100_presencial_porto_real_rj,
    vaga_100_presencial_goiana_pe,
    vaga_100_presencial_betim_mg,
    vaga_internacional,
    vaga_hibrida_betim,
    home_office,
    vaga_hibrida_goiana_pe,
    vaga_hibrida_sao_paulo,
    vaga_hibrida_porto_real,
  } = dados;

  const camposVazios = [];

  if (!profissional) camposVazios.push("profissional");
  if (!data_de_nascimento) camposVazios.push("data_de_nascimento");
  if (!cpf) camposVazios.push("cpf");
  if (!cidade) camposVazios.push("cidade");
  if (!uf) camposVazios.push("uf");
  if (!telefone) camposVazios.push("telefone");
  if (!email) camposVazios.push("email");
  if (!esta_empregado) camposVazios.push("esta_empregado");
  if (!experiencia_ramo_automotivo)
    camposVazios.push("experiencia_ramo_automotivo");
  if (!modalidade_atual) camposVazios.push("modalidade_atual");
  if (!tipo_desejado_linkedin) camposVazios.push("tipo_desejado_linkedin");
  if (!nivel_funcao) camposVazios.push("nivel_funcao");
  if (!formacao) camposVazios.push("formacao");
  if (!interesse_imediato) camposVazios.push("interesse_imediato");
  if (!entrevista_online) camposVazios.push("entrevista_online");
  if (!teste_tecnico) camposVazios.push("teste_tecnico");
  if (!conhecimento_ingles) camposVazios.push("conhecimento_ingles");
  if (!pretensao_salarial) camposVazios.push("pretensao_salarial");
  if (!pretensao_pj) camposVazios.push("pretensao_pj");
  if (!cnpj) camposVazios.push("cnpj");
  if (!vaga_100_presencial_porto_real_rj)
    camposVazios.push("vaga_100_presencial_porto_real_rj");
  if (!vaga_100_presencial_goiana_pe)
    camposVazios.push("vaga_100_presencial_goiana_pe");
  if (!vaga_100_presencial_betim_mg)
    camposVazios.push("vaga_100_presencial_betim_mg");
  if (!vaga_internacional) camposVazios.push("vaga_internacional");
  if (!vaga_hibrida_betim) camposVazios.push("vaga_hibrida_betim");
  if (!home_office) camposVazios.push("home_office");
  if (!vaga_hibrida_goiana_pe) camposVazios.push("vaga_hibrida_goiana_pe");
  if (!vaga_hibrida_porto_real) camposVazios.push("vaga_hibrida_porto_real");
  if (!vaga_hibrida_sao_paulo) camposVazios.push("vaga_hibrida_sao_paulo");
  if (camposVazios.length > 10) {
    return "Preencha todos os campos.";
  }

  return camposVazios;
};

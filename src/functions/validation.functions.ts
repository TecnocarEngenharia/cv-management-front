export const validarDados = (dados: any, formations: any) => {
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
  } = dados;
  const { escolaridade, instituicao, curso, inicio, termino_previsao, status } =
    formations;

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
  if(!escolaridade) camposVazios.push("escolaridade");
  if(!instituicao) camposVazios.push("instituicao");
  if(!curso) camposVazios.push("curso");
  if(!inicio) camposVazios.push("inicio");
  if(!termino_previsao) camposVazios.push("termino_previsao");
  if(!status) camposVazios.push("status");
  if (camposVazios.length > 5) {
    return "Preencha todos os campos.";
  }

  return camposVazios;
};

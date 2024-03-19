import * as C from "./style";
import { useState, ChangeEvent } from "react";
import InputField from "../../components/inputField";
import { fields } from "../../utils/camposForm";
import { Candidate } from "../../types/candidate.types";
import Borracha from "../../image/borracha.png";
import Menos from "../../image/menos.png";
import { LimparCampos } from "../../utils/cleanForm";
import { formatCPF, formatPhoneNumber } from "../../utils/regex";
import { handleKeyDown } from "../../functions/handleKeyDown.fucntions";
import {
  camposDisponibilidadeForm,
  camposRadioLocalizacao,
  camposSelect,
  conhecimentoIdiomas,
} from "../../utils/campoForms";
import axios from "axios";
import { validarDados } from "../../functions/validation.functions";
import InputSelect from "../../components/inputSelect";
import SelectUF from "../../components/select";

const Register: React.FC = () => {
  const [newCandidate, setNewCandidate] = useState<Candidate>({
    profissional: "",
    data_de_nascimento: "",
    cpf: "",
    cidade: "",
    uf: "",
    telefone: "",
    email: "",
    esta_empregado: "",
    empresa_atual: "",
    salario_atual: "",
    ultimo_salario: "",
    experiencia_ramo_automotivo: "",
    modalidade_atual: "",
    salario_hora: "",
    tipo_desejado_linkedin: "",
    nivel_funcao: "",
    formacao: "",
    interesse_imediato: "",
    entrevista_online: "",
    teste_tecnico: "",
    conhecimento_ingles: "",
    conhecimento_frances: "",
    conhecimento_italiano: "",
    conhecimento_espanhol: "",
    pretensao_salarial: "",
    pretensao_pj: "",
    cnpj: "",
    tipo_cnpj: "",
    vaga_100_presencial_porto_real_rj: "",
    vaga_100_presencial_goiana_pe: "",
    vaga_100_presencial_betim_mg: "",
    vaga_100_presencial_sao_paulo: "",
    vaga_internacional: "",
    vaga_hibrida_betim: "",
    vaga_hibrida_sao_paulo: "",
    vaga_hibrida_goiana_pe: "",
    vaga_hibrida_porto_real_rj: "",
    home_office: "",
    genero: "",
    resumoProfissional: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorPost, setErrorPost] = useState(null);
  const [message, setMessage] = useState("");
  const [upload, setUpload] = useState<File | undefined>(undefined);
  const [view, setView] = useState(0);
  const [_isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeTelefone = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewCandidate({ ...newCandidate, telefone: formattedPhoneNumber });
  };

  const handleChangeCPF = (e: { target: { value: string } }) => {
    const formattedCPF = formatCPF(e.target.value);
    setNewCandidate({ ...newCandidate, cpf: formattedCPF });
  };

  const handleChangeSalary = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,k
    }).format(salarioNumerico / 100);

    setNewCandidate({ ...newCandidate, pretensao_salarial: salarioFormatado });
  };

  const handleChangeSalaryTwo = (field: keyof Candidate, value: string) => {
    let salarioSemFormato = value.replace(/[^\d]/g, ""); 
    salarioSemFormato = salarioSemFormato.slice(0, 7); 

    const salarioNumerico = Number(salarioSemFormato); // Converte para número
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100); // Formata como moeda brasileira

    // Atualiza o estado com o valor formatado
    setNewCandidate({ ...newCandidate, [field]: salarioFormatado });
  };

  const handleChangeSalaryPJ = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100);

    setNewCandidate({ ...newCandidate, pretensao_pj: salarioFormatado });
  };

  const handleInputChange = (field: keyof Candidate, value: string): void => {
    setNewCandidate({
      ...newCandidate,
      [field]: value,
    });
  };

  const handleLimparCampos = () => {
    setNewCandidate(LimparCampos());
    setUpload(undefined);
  };

  const handleCheckFields = () => {
    setIsSubmitting(true);
    const camposValidos = validarDados(newCandidate);

    if (typeof camposValidos === "string") {
      setMessage(camposValidos);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setIsSubmitting(false);
      return;
    }

    if (camposValidos.length > 0) {
      const camposVaziosString = camposValidos.join(", ");
      setMessage(`Os seguintes campos estão vazios: ${camposVaziosString}`);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setIsSubmitting(false);
    } else {
      handleCadastro();
    }
  };

  const handleCadastro = async () => {
    try {
      const token = !!localStorage.getItem("token");
      const formData = new FormData();

      formData.append("data", JSON.stringify(newCandidate));

      if (upload) {
        formData.append("curriculo", upload);
      }

      const newDataWithUpload = {
        ...newCandidate,
        pretensao_salarial:
          Number(newCandidate.pretensao_salarial.replace(/[^\d]/g, "")) / 100,
        pretensao_pj:
          Number(newCandidate.pretensao_pj.replace(/[^\d]/g, "")) / 100,
        foi_avaliado_recrutamento: token,
        curriculo: upload,
      };
      await axios.post(import.meta.env.VITE_API_URL, newDataWithUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      handleLimparCampos();
      setView(0);
      setIsSubmitting(false);
    } catch (error: any) {
      setIsSubmitting(false);
      setErrorPost(error.response.data.message);
      setTimeout(() => {
        setErrorPost(null);
      }, 3000);
      setView(0);
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown}>
        <C.ContentTitle>
          <C.Search onClick={() => setView(0)}>
            <C.Title>Informações Candidato</C.Title>
            <img src={Menos} alt="" onClick={() => setView(0)} />
          </C.Search>
          <C.ContentMessage>
            {message && <p className="Err"> {message}</p>}
            {errorPost && <p className="Err">Erro ao cadastrar: {errorPost}</p>}
            <p className="Sucess">{successMessage}</p>
          </C.ContentMessage>
          <img src={Borracha} alt="" onClick={() => handleLimparCampos()} />
        </C.ContentTitle>
        <C.Content>
          {view === 0 && (
            <>
              {fields.map((fieldInfo) => (
                <InputField
                  key={fieldInfo.field}
                  label={fieldInfo.label}
                  value={newCandidate[fieldInfo.field]}
                  type={fieldInfo.type}
                  className={fieldInfo.class}
                  placeholder={fieldInfo.placeholder}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                  ) => {
                    if (fieldInfo.label === "Contato") {
                      handleChangeTelefone(e);
                    } else if (fieldInfo.label === "CPF") {
                      handleChangeCPF(e);
                    } else {
                      handleInputChange(fieldInfo.field, e.target.value);
                    }
                  }}
                />
              ))}
              <InputSelect
                label="Gênero"
                className="genero"
                value={newCandidate.genero}
                options={["Selecione seu gênero", "Masculino", "Feminino"]}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, genero: e.target.value })
                }
              />
              <C.AddressFields>
                <InputField
                  label="Cidade"
                  value={newCandidate.cidade}
                  onChange={(e) =>
                    setNewCandidate({ ...newCandidate, cidade: e.target.value })
                  }
                  placeholder="Cidade"
                />
                <SelectUF
                  label="UF"
                  selectedUF={newCandidate.uf}
                  onChange={(value) => handleInputChange("uf", value)}
                  className="UF"
                />
              </C.AddressFields>
            </>
          )}
        </C.Content>
        <C.Search onClick={() => setView(1)}>
          <C.Title>Nível de conhecimento em Idiomas</C.Title>
          <img src={Menos} alt="" onClick={() => setView(1)} />
        </C.Search>
        <C.Content className="idiomas">
          {view === 1 && (
            <>
              {conhecimentoIdiomas.map((idioma, index) => (
                <div key={index}>
                  <InputSelect
                    label={idioma.label}
                    options={idioma.options}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                    ) => handleInputChange(idioma.field, e.target.value)}
                    value={newCandidate[idioma.field]}
                    className="idiomas"
                  />
                </div>
              ))}
            </>
          )}
        </C.Content>
        <C.Search onClick={() => setView(2)}>
          <C.Title>Situação Profissisional Atual</C.Title>
          <img src={Menos} alt="" onClick={() => setView(2)} />
        </C.Search>
        <C.Content className="situacao">
          {view === 2 && (
            <>
              {camposSelect.map((campo, index) => {
                if (
                  (campo.field === "empresa_atual" &&
                    (newCandidate.esta_empregado !== "Sim" ||
                      !newCandidate.esta_empregado)) ||
                  (campo.field === "salario_atual" &&
                    (newCandidate.esta_empregado !== "Sim" ||
                      !newCandidate.esta_empregado)) ||
                  (campo.field === "ultimo_salario" &&
                    (newCandidate.esta_empregado !== "Não" ||
                      !newCandidate.esta_empregado)) ||
                  (campo.field === "salario_hora" &&
                    newCandidate.modalidade_atual !== "Prestador de serviços")
                ) {
                  return null;
                }

                return (
                  <div key={index} className="campo-container">
                    {campo.type === "select" && (
                      <InputSelect
                        label={campo.label}
                        options={
                          campo.field === "modalidade_atual" &&
                          newCandidate.esta_empregado === "Sim"
                            ? campo.optionsTwo
                            : campo.options
                        }
                        onChange={(
                          e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                        ) => handleInputChange(campo.field, e.target.value)}
                        value={newCandidate[campo.field]}
                        className={
                          newCandidate.esta_empregado === "Sim" && campo.class
                            ? campo.class
                            : "mobile"
                        }
                      />
                    )}
                    {campo.type === "text" && (
                      <InputField
                        label={campo.label}
                        value={newCandidate[campo.field]}
                        //@ts-ignore
                        onChange={
                          (e: ChangeEvent<HTMLInputElement>) =>
                            campo.field === "empresa_atual" // Verifica se é o campo "empresa_atual"
                              ? handleInputChange(campo.field, e.target.value) // Se for, usa a função handleInputChange diretamente
                              : handleChangeSalaryTwo(
                                  campo.field,
                                  e.target.value
                                ) // Senão, aplica a formatação de salário
                        }
                        className="situacao"
                      />
                    )}
                  </div>
                );
              })}
            </>
          )}
        </C.Content>

        <C.Search onClick={() => setView(3)}>
          <C.Title>Preferências e Disponibilidade</C.Title>
          <img src={Menos} alt="" onClick={() => setView(3)} />
        </C.Search>
        {view === 3 && (
          <C.Content className="disponibilidade">
            {camposDisponibilidadeForm.map((campo, index) => (
              <div key={index}>
                {campo.type === "select" && (
                  <>
                    {(campo.field !== "tipo_cnpj" ||
                      newCandidate.cnpj === "Sim") && (
                      <InputSelect
                        label={campo.label}
                        options={campo.options}
                        onChange={(
                          e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                        ) => handleInputChange(campo.field, e.target.value)}
                        value={newCandidate[campo.field]}
                        className="pretensao"
                      />
                    )}
                  </>
                )}
              </div>
            ))}
            {view === 3 && (
              <>
                <InputField
                  label="Pretensão salarial no regime CLT"
                  value={newCandidate.pretensao_salarial}
                  onChange={(e) => handleChangeSalary(e)}
                  className={
                    newCandidate.cnpj === "Não" || newCandidate.cnpj === ""
                      ? "pretensao_Clt"
                      : "pretensao"
                  }
                />
                <InputField
                  label="Pretensão PJ, valor hora"
                  value={newCandidate.pretensao_pj}
                  onChange={(e) => handleChangeSalaryPJ(e)}
                  className="pretensao"
                />
              </>
            )}
          </C.Content>
        )}

        <C.Search className="localizacao" onClick={() => setView(4)}>
          <C.Title>Localização e Anexos</C.Title>
          <img src={Menos} alt="" onClick={() => setView(4)} />
        </C.Search>
        {view === 4 && (
          <C.Content className="localizacao">
            <>
              {camposRadioLocalizacao.map((campo, index) => (
                <div key={index}>
                  {campo.type === "select" && (
                    <>
                      <InputSelect
                        label={campo.label}
                        options={campo.options}
                        onChange={(
                          e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                        ) => handleInputChange(campo.field, e.target.value)}
                        value={newCandidate[campo.field]}
                        className="localizacao"
                      />
                    </>
                  )}
                </div>
              ))}
              {view === 4 && (
                <>
                  <C.FileInputContainer>
                    <C.ContentUpload>
                      <label htmlFor="upload-curriculo">
                        Anexe seu currículo
                      </label>
                      <input
                        type="file"
                        id="upload-curriculo"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            setUpload(files[0]);
                          }
                        }}
                        accept=".pdf"
                      />
                      <label
                        className="custom-file-upload"
                        htmlFor="upload-curriculo"
                      >
                        Escolher Arquivo
                      </label>
                    </C.ContentUpload>
                    {upload && <p> {upload.name}</p>}
                  </C.FileInputContainer>
                </>
              )}
            </>
          </C.Content>
        )}

        <C.ContentButton className="ContentButton">
          <C.SubmitButton onClick={() => handleCheckFields()}>
            {_isSubmitting ? "Cadastrando ..." : "Cadastrar"}
          </C.SubmitButton>
        </C.ContentButton>
      </C.Form>
    </C.Container>
  );
};

export { Register };

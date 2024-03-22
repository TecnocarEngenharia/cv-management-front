import { useState, useEffect } from "react";
import RangeSlider from "../inputRange";
import * as C from "./style";
import InputRadio from "../inputCheck/inputRadio";
import InputSelect from "../inputSelect";
import { camposSelect } from "../../utils/campoForms";
import { ContentCheckLabel } from "../inputCheck";

interface ModalFilterProps {
  toggleFilter?: () => void;
  onFilterApply?: (filtro: any) => void;
  removeQueryAndFetchData?: () => void;
  conhecimentoIngles?: string[];
  uf?: string[];
}

const ModalFilter = ({ onFilterApply, toggleFilter }: ModalFilterProps) => {
  const [minIdade, setMinIdade] = useState(0);
  const [maxIdade, setMaxIdade] = useState(70);
  const [minPretensaoSalarial, setMinPretensaoSalarial] = useState(0);
  const [maxPretensaoSalarial, setMaxPretensaoSalarial] = useState(20000);
  const [minPretensaoPJ, setMinPretensaoPJ] = useState(0);
  const [maxPretensaoPJ, setMaxPretensaoPJ] = useState(200);
  const [conhecimento_ingles, setConhecimentoIngles] = useState<string[]>([]);
  const [tipo_desejado_linkedin, setTipo_desejado_linkedin] = useState("");
  const [nivel_funcao, setNivelFuncao] = useState("");
  const [modalidade_atual, setModalidadeAtual] = useState("");
  const [formacao, setFormacao] = useState("");
  const [
    vaga_100_presencial_porto_real_rj,
    setVaga_100_presencial_porto_real_rj,
  ] = useState("N/A");
  const [vaga_100_presencial_goiana_pe, setVaga_100_presencial_goiana_pe] =
    useState("N/A");
  const [vaga_100_presencial_betim_mg, setVaga_100_presencial_betim_mg] =
    useState("N/A");
  const [vaga_internacional, setVagaInternacional] = useState("N/A");
  const [experiencia_ramo_automotivo, setExperienciaRamoAutomotivo] =
    useState("N/A");
  const [esta_empregado, setEstaEmpregado] = useState("N/A");
  const [interesse_imediato, setInteresseImediato] = useState("N/A");
  const [home_office, setHomeOffice] = useState("N/A");
  const [vaga_100_presencial_sao_paulo, setVaga_100_presencial_sao_paulo] =
    useState("N/A");
  const [uf, setUf] = useState<string[]>([]);
  const [genero, setGenero] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const savedFilters = localStorage.getItem("filtros");
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters);
      setMinIdade(parsedFilters.minIdade);
      setMaxIdade(parsedFilters.maxIdade);
      setMinPretensaoSalarial(parsedFilters.minPretensaoSalarial);
      setMaxPretensaoSalarial(parsedFilters.maxPretensaoSalarial);
      setMinPretensaoPJ(parsedFilters.minPretensaoPJ);
      setMaxPretensaoPJ(parsedFilters.maxPretensaoPJ);
      setConhecimentoIngles(parsedFilters.conhecimento_ingles);
      setTipo_desejado_linkedin(parsedFilters.tipo_desejado_linkedin);
      setNivelFuncao(parsedFilters.nivel_funcao);
      setModalidadeAtual(parsedFilters.modalidade_atual);
      setFormacao(parsedFilters.formacao);
      setVaga_100_presencial_porto_real_rj(
        parsedFilters.vaga_100_presencial_porto_real_rj
      );
      setVaga_100_presencial_goiana_pe(
        parsedFilters.vaga_100_presencial_goiana_pe
      );
      setVaga_100_presencial_betim_mg(
        parsedFilters.vaga_100_presencial_betim_mg
      );
      setVagaInternacional(parsedFilters.vaga_internacional);
      setExperienciaRamoAutomotivo(parsedFilters.experiencia_ramo_automotivo);
      setEstaEmpregado(parsedFilters.esta_empregado);
      setInteresseImediato(parsedFilters.interesse_imediato);
      setHomeOffice(parsedFilters.home_office);
      setVaga_100_presencial_sao_paulo(
        parsedFilters.vaga_100_presencial_sao_paulo
      );
      setUf(parsedFilters.uf);
      setGenero(parsedFilters.genero);
      setStatus(parsedFilters.status);
    }
  }, []);

  const closeFilter = () => {
    if (toggleFilter) {
      toggleFilter();
    }
  };

  const handleFilter = () => {
    const filtro = {
      minIdade,
      maxIdade,
      minPretensaoSalarial,
      maxPretensaoSalarial,
      minPretensaoPJ,
      maxPretensaoPJ,
      conhecimento_ingles,
      tipo_desejado_linkedin,
      nivel_funcao,
      modalidade_atual,
      formacao,
      vaga_100_presencial_porto_real_rj,
      vaga_100_presencial_goiana_pe,
      vaga_100_presencial_betim_mg,
      uf,
      experiencia_ramo_automotivo,
      vaga_internacional,
      esta_empregado,
      interesse_imediato,
      home_office,
      vaga_100_presencial_sao_paulo,
      genero,
      status,
    };

    const filtroJSON = JSON.stringify(filtro);
    localStorage.setItem("filtros", filtroJSON);

    if (onFilterApply) {
      onFilterApply(filtro);
    }
    if (toggleFilter) {
      toggleFilter();
    }
  };

  const handleClearFilters = () => {
    localStorage.removeItem("filtros");
    setMinIdade(0);
    setMaxIdade(70);
    setMinPretensaoSalarial(0);
    setMaxPretensaoSalarial(20000);
    setMinPretensaoPJ(0);
    setMaxPretensaoPJ(200);
    setConhecimentoIngles([]);
    setTipo_desejado_linkedin("");
    setNivelFuncao("");
    setModalidadeAtual("");
    setFormacao("");
    setVaga_100_presencial_porto_real_rj("N/A");
    setVaga_100_presencial_goiana_pe("N/A");
    setVaga_100_presencial_betim_mg("N/A");
    setVagaInternacional("N/A");
    setExperienciaRamoAutomotivo("N/A");
    setEstaEmpregado("N/A");
    setInteresseImediato("N/A");
    setHomeOffice("N/A");
    setVaga_100_presencial_sao_paulo("N/A");
    setUf([]);
    setGenero("");
    setStatus("");
  };

  useEffect(() => {
    loadSavedFilters();
  }, []);

  const loadSavedFilters = () => {
    const savedFilters = localStorage.getItem("filtros");
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters);
      setMinIdade(parsedFilters.minIdade);
      setMaxIdade(parsedFilters.maxIdade);
      setMinPretensaoSalarial(parsedFilters.minPretensaoSalarial);
      setMaxPretensaoSalarial(parsedFilters.maxPretensaoSalarial);
      setMinPretensaoPJ(parsedFilters.minPretensaoPJ);
      setMaxPretensaoPJ(parsedFilters.maxPretensaoPJ);
    }
  };

  return (
    <C.Container>
      <C.Content>
        <C.CardRecrutamento>Recrutamento</C.CardRecrutamento>
        <C.ContentRange>
          <RangeSlider
            label="Idade"
            value={[minIdade, maxIdade]}
            onChange={(value) => {
              if (Array.isArray(value)) {
                setMinIdade(value[0]);
                setMaxIdade(value[1]);
              }
            }}
            max={70}
            title=" anos "
          />
          <RangeSlider
            label="Pretensão Salarial CLT"
            value={[minPretensaoSalarial, maxPretensaoSalarial]}
            onChange={(value) => {
              if (Array.isArray(value)) {
                setMinPretensaoSalarial(value[0]);
                setMaxPretensaoSalarial(value[1]);
              }
            }}
            max={20000}
            real="R$"
          />
          <RangeSlider
            label="Pretensão PJ"
            value={[minPretensaoPJ, maxPretensaoPJ]}
            onChange={(value) => {
              if (Array.isArray(value)) {
                setMinPretensaoPJ(value[0]);
                setMaxPretensaoPJ(value[1]);
              }
            }}
            max={200}
            real="R$"
          />
        </C.ContentRange>
        <C.ContentCheck>
          <ContentCheckLabel
            title="Conhecimento Inglês"
            options={[
              { label: "Fluente", value: "Fluente" },
              { label: "Avançado", value: "Avançado" },
              { label: "Intermediário", value: "Intermediário" },
              { label: "Básico", value: "Básico" },
              { label: "N/A", value: "N/A" },
            ]}
            onChange={(value) => setConhecimentoIngles(value)}
            checked={conhecimento_ingles} // Passando os valores selecionados
          />
          <ContentCheckLabel
            title="Localidade"
            options={[
              { label: "São Paulo - SP", value: "SP" },
              { label: "Minas Gerais - MG", value: "MG" },
              { label: "Rio de Janeiro - RJ", value: "RJ" },
              { label: "Goiana - PE", value: "PE" },
              { label: "Outros", value: "outros" },
            ]}
            onChange={(value) => setUf(value)}
            checked={uf}
          />
        </C.ContentCheck>
        <C.ContentSelect>
          <C.ContentSelectInput>
            <InputSelect
              label="Nível da Função"
              className="filter"
              options={
                camposSelect.find((campo) => campo.field === "nivel_funcao")
                  ?.options || []
              }
              onChange={(e) => setNivelFuncao(e.target.value)}
              value={nivel_funcao}
            />
            <InputSelect
              label="Modalidade Atual"
              className="filter"
              options={
                camposSelect.find((campo) => campo.field === "modalidade_atual")
                  ?.options || []
              }
              onChange={(e) => setModalidadeAtual(e.target.value)}
              value={modalidade_atual}
            />
            <InputSelect
              label="Gênero"
              className="filter"
              onChange={(e) => setGenero(e.target.value)}
              value={genero}
              options={["", "Masculino", "Feminino"]}
            />
          </C.ContentSelectInput>
          <div>
            <C.ContentSelectFormations>
              <InputSelect
                label="Formação"
                className="filter"
                options={
                  camposSelect.find((campo) => campo.field === "formacao")
                    ?.options || []
                }
                onChange={(e) => setFormacao(e.target.value)}
                value={formacao}
              />
              <InputSelect
                label="Status Candidato"
                className="filter filterStatus"
                options={[
                  "",
                  "Disponível",
                  "Sem interesse",
                  "Concorrência",
                  "Em entrevista",
                  "Teste técnico",
                  "Fora do Perfil",
                  "Contratado",
                ]}
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              />
            </C.ContentSelectFormations>
            <InputSelect
              label="Vaga Linkedin"
              className="filter"
              onChange={(e) => setTipo_desejado_linkedin(e.target.value)}
              value={tipo_desejado_linkedin}
            />
          </div>
        </C.ContentSelect>

        <C.ContentOptions>
          <div>
            <InputRadio
              label="Vaga Presencial Porto Real/RJ"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) =>
                setVaga_100_presencial_porto_real_rj(e.target.value)
              }
              value={vaga_100_presencial_porto_real_rj}
            />
            <InputRadio
              label="Vaga Presencial Goiana / PE"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setVaga_100_presencial_goiana_pe(e.target.value)}
              value={vaga_100_presencial_goiana_pe}
            />
            <InputRadio
              label="Vaga Presencial Betim / MG"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setVaga_100_presencial_betim_mg(e.target.value)}
              value={vaga_100_presencial_betim_mg}
            />
          </div>
          <div>
            <InputRadio
              label="Vaga Presencial São Paulo / SP"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setVaga_100_presencial_sao_paulo(e.target.value)}
              value={vaga_100_presencial_sao_paulo}
            />
            <InputRadio
              label="Vaga Internacional"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setVagaInternacional(e.target.value)}
              value={vaga_internacional}
            />
            <InputRadio
              label="Home Office"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setHomeOffice(e.target.value)}
              value={home_office}
            />
          </div>
          <div>
            <InputRadio
              label="Experiencia Ramo Automotivo"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setExperienciaRamoAutomotivo(e.target.value)}
              value={experiencia_ramo_automotivo}
            />
            <InputRadio
              label="Esta Empregado"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setEstaEmpregado(e.target.value)}
              value={esta_empregado}
            />
            <InputRadio
              label="Interesse Imediato"
              options={["Sim", "Não", "N/A"]}
              onChange={(e) => setInteresseImediato(e.target.value)}
              value={interesse_imediato}
            />
          </div>
        </C.ContentOptions>
        <C.ContentButtons>
          <button onClick={handleFilter}>Filtrar</button>
          <button onClick={handleClearFilters}>Limpar Filtros</button>
          <button onClick={closeFilter}>Fechar Filtro</button>
        </C.ContentButtons>
      </C.Content>
    </C.Container>
  );
};

export { ModalFilter };

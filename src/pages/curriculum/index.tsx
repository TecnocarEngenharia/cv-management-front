import Logo from "../../image/logoTecnocar2.png";
import Telefone from "../../image/telefone.png";
import Email from "../../image/email.png";
import { useNavigate, useParams } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";
import { useState } from "react";
import icon_add from "../../image/icon_add.svg";
import { ModalEscolaridade } from "../../components/modalEscolaridade";
import { ModalExperiencia } from "../../components/modalExperience";
import { ModalSoftware } from "../../components/modalSoftwares";
import { converterData, formatarDataPT } from "../../functions/formatarDate";
import { ModalAtividade } from "../../components/modalAtividades";
import { ModalCurso } from "../../components/modalCurso";
// @ts-ignore
import html2pdf from "html2pdf.js";

const Curriculum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data, refetch } = useAxiosCandidate(url);
  const [escolaridade, setEscolaridade] = useState(false);
  const [experiencia, setExperiencia] = useState(false);
  const [software, setSoftware] = useState(false);
  const [curso, setCurso] = useState(false);
  const [atividades, setAtividades] = useState(false);
  const [hideImage, setHideImage] = useState(false);

  const toggleModal = (state: boolean, setState: (state: boolean) => void) => {
    setState(!state);
    refetch();
  };

  const saveAsPDF = () => {
    const content = document.querySelector(".container-to-pdf"); // Seletor da seção que você deseja converter em PDF

    // Definindo as configurações do PDF
    const options = {
      filename: `Tecnocar - ${data?.codigoCandidate} - ${data?.idade} anos - ${data?.genero} - ${data?.cidade}/${data?.uf}.pdf`,
      image: { type: "jpeg", quality: 0.1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in",
        format: [11, 11.69], 
        orientation: "portrait",
      },
    };
    html2pdf().from(content).set(options).save();
    setHideImage(false);
  };

  const handleCapitaliza = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  return (
    <>
      <C.ContentButton>
        <button
          onClick={() => {
            setHideImage(true);
            setTimeout(() => {
              saveAsPDF();
            }, 1000);
          }}
        >
          Salvar como PDF
        </button>
        <button onClick={() => navigate("/candidates")}> Voltar </button>
      </C.ContentButton>
      <C.Container className="container-to-pdf">
        <C.LeftPanel>
          {data && (
            <>
              <C.CardInfo>
                <span>
                  {data?.codigoCandidate} - {data.idade} anos - {data.genero} -{" "}
                  {data.cidade}/{data.uf}
                </span>
              </C.CardInfo>
              <C.ContentInfo>
                <C.ContentLogo>
                  <C.Profissional>{data?.codigoCandidate}</C.Profissional>
                  <img src={Logo} alt="" />
                </C.ContentLogo>
                <C.ContainerTwo>
                  <C.ContainerDados>
                    <C.ContentEmail>
                      <img src={Telefone} alt="icone de telefone" />
                      <span>(31) 99262-2572</span>
                    </C.ContentEmail>
                    <C.ContentEmail>
                      <img src={Email} alt="icone de e-mail" />
                      <span className="Email">
                        recrutamento@tecnocarengenharia.com.br
                      </span>
                    </C.ContentEmail>
                  </C.ContainerDados>
                </C.ContainerTwo>
              </C.ContentInfo>
              {data.resumoProfissional && (
                <C.Resumo>
                  <p>{data.resumoProfissional}</p>
                </C.Resumo>
              )}
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerThree>
                <C.SubTitle>Disponibilidade</C.SubTitle>
                <C.Vagas>
                  <C.VagasItem>
                    {data.vaga_100_presencial_betim_mg === "Sim" && (
                      <div>
                        <span>Vaga 100% Presencial Betim/MG:</span>{" "}
                        {data.vaga_100_presencial_betim_mg}
                      </div>
                    )}
                    {data.vaga_100_presencial_goiana_pe === "Sim" && (
                      <div>
                        <span>Vaga 100% Presencial Goiana/PE:</span>{" "}
                        {data.vaga_100_presencial_goiana_pe}
                      </div>
                    )}
                    {data.vaga_100_presencial_porto_real_rj === "Sim" && (
                      <div>
                        <span>Vaga 100% Presencial Porto Real/RJ:</span>{" "}
                        {data.vaga_100_presencial_porto_real_rj}
                      </div>
                    )}
                    {data.vaga_100_presencial_sao_paulo === "Sim" && (
                      <div>
                        <span>Vaga 100% Presencial São Paulo/SP:</span>{" "}
                        {data.vaga_100_presencial_sao_paulo}
                      </div>
                    )}
                    {data.home_office === "Sim" && (
                      <div>
                        <span>Home Office:</span> {data.home_office}
                      </div>
                    )}
                  </C.VagasItem>
                  <C.VagasItem className="item_right">
                
              
                    
                    {data.vaga_internacional === "Sim" && (
                      <div>
                        <span>Vaga Internacional:</span>{" "}
                        {data.vaga_internacional}
                      </div>
                    )}
                  </C.VagasItem>
                </C.Vagas>
              </C.ContainerThree>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerFive>
                <C.ContentForTitle>
                  <C.SubTitle> Experiência Profissional </C.SubTitle>
                  <button
                    onClick={() => toggleModal(experiencia, setExperiencia)}
                  >
                    {!hideImage && <img src={icon_add} alt="" />}
                  </button>
                </C.ContentForTitle>
                {data?.experiencias.map((item: any, index: string) => (
                  <C.ContentFive key={index}>
                    <C.Period>
                      <div>
                        <p className="title-info">{item.empresa}</p>
                      </div>
                    </C.Period>
                    <C.Period className="cargos_empresa">
                      <span>{item.cargo},</span>
                      {formatarDataPT(item.periodo_inicial)} -
                      {item.esta_atualmente === true ? (
                        <span>Atual</span>
                      ) : (
                        <span>{formatarDataPT(item.periodo_final)}</span>
                      )}
                    </C.Period>
                    <C.Period className="Atividades cargos_empresa">
                      {Array.isArray(item.atividades) ? (
                        item.atividades.map(
                          (atividade: string, indexAtividade: number) => (
                            <C.ContentAtividade key={indexAtividade}>
                              <div key={indexAtividade}>
                                <li>{atividade}</li>
                              </div>
                            </C.ContentAtividade>
                          )
                        )
                      ) : (
                        <p>{item.atividades}</p>
                      )}
                    </C.Period>
                  </C.ContentFive>
                ))}
              </C.ContainerFive>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerFor>
                <C.ContentForTitle>
                  <C.SubTitle>Formação Acadêmica</C.SubTitle>
                  <button
                    onClick={() => toggleModal(escolaridade, setEscolaridade)}
                  >
                    {!hideImage && <img src={icon_add} alt="" />}
                  </button>
                </C.ContentForTitle>
                {data?.formacoes.map((item: any, index: string) => (
                  <C.ContentFor key={index}>
                    <C.Institution>
                      <p>
                        {item.instituicao}, {item.curso}
                      </p>
                    </C.Institution>
                    <C.Status>
                      <C.InfoInstituion></C.InfoInstituion>
                    </C.Status>
                    <C.Prevision>
                      <div>
                        <span>
                          {item.status}, {converterData(item.termino_previsao)}
                        </span>
                      </div>
                    </C.Prevision>
                  </C.ContentFor>
                ))}
              </C.ContainerFor>
              <C.LinhaComBolinhas className="softwares_ati">
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerSix>
                <div>
                  <C.ContentForTitle>
                    <C.SubTitle> Softwares</C.SubTitle>
                    <button onClick={() => toggleModal(software, setSoftware)}>
                      {!hideImage && <img src={icon_add} alt="" />}
                    </button>
                  </C.ContentForTitle>
                  <C.ContentSix>
                    {data?.software.map(
                      (
                        item: { software: string; nivel: string },
                        index: number
                      ) => (
                        <div key={index}>
                          <p>
                            {item.software} - <span>{item.nivel}</span>
                          </p>
                        </div>
                      )
                    )}
                  </C.ContentSix>
                </div>
                <div>
                  <C.SubTitle className="idiomas"> Idiomas</C.SubTitle>
                  <C.ContentIdiomas>
                    {data && (
                      <>
                        {data.conhecimento_ingles &&
                          data.conhecimento_ingles.trim() !== "N/A" && (
                            <p>
                              Inglês - Nível {data.conhecimento_ingles.trim()}.
                            </p>
                          )}
                        {data.conhecimento_frances &&
                          data.conhecimento_frances.trim() !== "N/A" && (
                            <p>
                              Francês - Nível {data.conhecimento_frances.trim()}
                              .
                            </p>
                          )}
                        {data.conhecimento_italiano &&
                          data.conhecimento_italiano.trim() !== "N/A" && (
                            <p>
                              Italiano - Nível
                              {data.conhecimento_italiano.trim()}.
                            </p>
                          )}
                        {data.conhecimento_espanhol &&
                          data.conhecimento_espanhol.trim() !== "N/A" && (
                            <p>
                              Espanhol - Nível  {data.conhecimento_espanhol.trim()}.
                            </p>
                          )}
                      </>
                    )}
                  </C.ContentIdiomas>
                </div>
              </C.ContainerSix>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerSeven>
                <C.ContainerCursos>
                  <C.ContentForTitle>
                    <C.SubTitle> Cursos </C.SubTitle>
                    <C.Icons>
                      <button onClick={() => toggleModal(curso, setCurso)}>
                        {!hideImage && <img src={icon_add} alt="" />}
                      </button>
                    </C.Icons>
                  </C.ContentForTitle>
                  <C.ContentCursos>
                    {data.cursos.map(
                      (
                        item: { curso: string; nivel: string },
                        index: number
                      ) => {
                        return (
                          <div key={index}>
                            <p>- {handleCapitaliza(item.curso)}</p>
                          </div>
                        );
                      }
                    )}
                  </C.ContentCursos>
                </C.ContainerCursos>

                <div className="atividades">
                  <C.ContentForTitle>
                    <C.SubTitle> Habilidades e Competências </C.SubTitle>
                    <C.Icons>
                      <button
                        onClick={() => toggleModal(atividades, setAtividades)}
                      >
                        {!hideImage && <img src={icon_add} alt="" />}
                      </button>
                    </C.Icons>
                  </C.ContentForTitle>
                  <C.ContentAtividade>
                    {data.Atividades.map((item: any, index: number) => (
                      <div key={index}>
                        <p>- {item.name}</p>
                      </div>
                    ))}
                  </C.ContentAtividade>
                </div>
              </C.ContainerSeven>
            </>
          )}
        </C.LeftPanel>
      </C.Container>
      {escolaridade && (
        <ModalEscolaridade
          toggleModal={() => toggleModal(escolaridade, setEscolaridade)}
        />
      )}

      {experiencia && (
        <ModalExperiencia
          toggleModal={() => toggleModal(experiencia, setExperiencia)}
        />
      )}
      {software && (
        <ModalSoftware toggleModal={() => toggleModal(software, setSoftware)} />
      )}
      {curso && <ModalCurso toggleModal={() => toggleModal(curso, setCurso)} />}
      {atividades && (
        <ModalAtividade
          toggleModal={() => toggleModal(atividades, setAtividades)}
        />
      )}
    </>
  );
};

export default Curriculum;

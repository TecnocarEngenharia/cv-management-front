import { useState, useEffect } from "react";
import * as C from "./style";
import { CardBG } from "../../components/cardBG";
import play_bg from "../../image/play_bg.svg";
import svg_tablete from "../../image/svg_table.svg";

const PageStarts = () => {
  const [primeiroNome, setPrimeiroNome] = useState("");

  useEffect(() => {
    const getNomeDoToken = () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const nomeCompleto = decodedToken.userName;
          const primeiroNome = nomeCompleto.split(" ")[0];
          setPrimeiroNome(primeiroNome);
        } else {
          console.error("Token não encontrado no localStorage");
        }
      } catch (error) {
        console.error("Erro ao decodificar ou processar o token:", error);
      }
    };

    getNomeDoToken();
  }, []);

  return (
    <C.Container>
      <CardBG primeiroNome={primeiroNome} />

      <C.CardVideo>
        <C.ContainerPlay>
          <C.ContentVideo>
            <img src={play_bg} alt="" />
            <h4>Como usar a plataforma </h4>
          </C.ContentVideo>
          <C.Linhaa />
          <C.Description>
            Assista o vídeo abaixo e entenda de forma simples e facil como
            utilizar a plataforma.
          </C.Description>
          <C.ContainerVideo>
            <C.SVGICON src={svg_tablete} alt="" />
            <C.ContentCard>
              <h3>TUTORIAL AQUI</h3>
            </C.ContentCard>
          </C.ContainerVideo>
        </C.ContainerPlay>
      </C.CardVideo>
    </C.Container>
  );
};

export { PageStarts };

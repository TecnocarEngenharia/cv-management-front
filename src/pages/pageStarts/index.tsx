import { useState, useEffect } from "react";
import * as C from "./style";
import { CardBG } from "../../components/cardBG";
import play_bg from "../../image/play_bg.svg";
import svg_tablete from "../../image/svg_table.svg";
import ModalBoasVindas from "../../components/modalBoasVindas";
import axios from "axios";

const PageStarts = () => {
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [userID, setUserID] = useState<number>();
  const [fistVisit, setFirstVisit] = useState(false);
  const [data, setData] = useState({
    firstTime: Boolean,
    name: String,


  });

  useEffect(() => {
    if (userID) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_GET_ALL_URL}/${userID}`
          );
          console.log(response.data)
          setData(response.data);
        } catch (error) {
          console.error("Erro ao buscar usuário por ID:", error);
        }
      };

      fetchData();
    }
  }, [userID]);

  useEffect(() => {
    const getNomeDoToken = () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const nomeCompleto = decodedToken.userName;
          const primeiroNome = nomeCompleto.split(" ")[0];
          const userId = decodedToken.userId;
          setUserID(userId);
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

  useEffect(() => {
    if (userID && data && !data?.firstTime) {
      setFirstVisit(true);
    }
  }, [userID, data]);

  return (
    <>
      <C.Container>
        <CardBG primeiroNome={primeiroNome} />

        <C.CardVideo>
          <C.ContainerPlay>
            <C.ContentVideo>
              <img src={play_bg} alt="" />
              <h4>Como usar a plataforma</h4>
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
      {fistVisit && (
        <ModalBoasVindas
          closeModal={() => setFirstVisit(false)}
          name={primeiroNome}
          id={userID}
        />
      )}
    </>
  );
};

export { PageStarts };

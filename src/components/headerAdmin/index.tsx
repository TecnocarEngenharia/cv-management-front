import * as C from "./style";
import IconOnline from "../../image/icon_online.svg";
import { useState, useEffect } from "react";

const HeaderAdmin = () => {

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getNomeDoToken = () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const nomeCompleto = decodedToken.userName;
          const email = decodedToken.userEmail
          setEmail(email)
          setNomeCompleto(nomeCompleto);
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
        <C.ContainerHeader>
        <C.ContentAdmin>
          <C.InfoAdmin>
            <p>{nomeCompleto}</p>
            <p className="email">{email}</p>
          </C.InfoAdmin>
          <C.ContentImage>
            <img src={IconOnline} alt="icone user" />
            <C.Online />
          </C.ContentImage>
        </C.ContentAdmin>
      </C.ContainerHeader>
    )
}

export { HeaderAdmin}
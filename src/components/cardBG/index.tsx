import * as C from "./style";
import Tutorial from "../../image/icon_tutorial.svg";

interface CardBGProps {
  primeiroNome: string;
}

const CardBG: React.FC<CardBGProps> = ({ primeiroNome }) => {
  return (
    <C.CardInfo>
      <C.ContentCard>
        <h3>Não sabe usar nossa plataforma?</h3>
        <p>
          Olá
          <span> {primeiroNome}</span>, seja muito bem-vindo. Caso não saiba
          usar nossa plataforma, não se preocupe! Preparamos alguns tutoriais
          abaixo para você entender melhor como funciona.
        </p>
      </C.ContentCard>
      <C.ImageTutorial src={Tutorial} alt="" />
    </C.CardInfo>
  );
};

export { CardBG };

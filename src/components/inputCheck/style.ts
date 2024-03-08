import styled from "styled-components";

export const ContentCheckLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  margin-left: 28px;

  h3 {
    color: #333;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;

    margin-top: 5px;
  }
`;

export const ContentInputsOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 0.5px solid #5e5656;
    background: #fff;
    cursor: pointer; /* Adicionando cursor de ponteiro para indicar que é clicável */
  }

  /* Estilo para o input checkbox quando estiver marcado */
  input[type="checkbox"]:checked {
    background-color: #1bff07; /* Cor azul */
  }

  span {
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-left: 1.4em;
  width: 100%;

  &.resumoProfissional {
    margin-bottom: 20px;
  }

  &.situacao {
    margin-left: 2em;
    top: -0.38em;
  }

 

  @media (max-width: 450px) {
    &.pretensao {
      margin-left: 0;
    }
    &.inputObs {
      margin-left: 0;
    }
  }
  &.infoPessoais {
    margin-left: 0;
  }

  &.infoPessoaisEdit {
    margin-left: 0;
  }
  &.ramoAutomotivo {
    margin-left: 0;
  }

  &.situacao {
    margin-left: 1.8em;
    margin-top: -0.2em;
  }

  &.pretensao_Clt {
    position: absolute;
    bottom: 38%;
    left: 51.4%;
    width: 100%;

    @media (max-width: 450px) {
      position: relative;
      margin-left: 0;
      left: 0;
      bottom: 18%;
      width: 100%;
    }
    @media (min-width: 451px) and (max-width: 909px) {
      position: relative;
      margin-left: 0;
      left: 2em;
      top: 0em;
      width: 100%;
    }
  }

  &.escolaridade {
    margin-left: 0;
  }
`;
export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin: 5px 0px;
  color: #333;
  width: 100%;

  &.ramoAutomotivo {
    font-size: 13px;
    width: 150%;
  }

  &.inputObs {
    margin-left: 0.67em;
    width: 93%;
  }
  &.pretensao {
    margin-left: 0.7em;
    width: 93%;
  }
  &.alwaysActive {
    width: 120%;
    font-size: 11px;
  }

  @media (min-width: 451px) and (max-width: 1400px) {
    font-size: 11px;
  }
`;

export const Input = styled.input`
  width: 94.5%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  color: #75757e;
  background-color: #fff;

  &.situacao {
    width: 94%;
  }



  &.infoPessoais {
    width: 100%;
  }

  &.infoPessoaisEdit {
    border: none;
    border-bottom: 1px solid #ccc;
  }

  &.obs {
    padding-bottom: 54px;
  }

  &.resumoProfissional {
    padding-bottom: 54px;
  }
  &.escolaridade {
    width: 100%;
  }
  &.atividades-profissional {
    height: 69px;
    word-wrap: break-word;
    max-width: 600px;
  }

  &:focus {
    border-color: #9f3a3e;
  }

  &.inputUF {
    width: 90%;
    margin-bottom: 4%;
  }

  &.data {
    color: #75757e;
  }

  &.situacao {
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 10px;
  }

  &.InfoCandidate {
    width: 90%;
  }

  &.inputObs {
    margin-left: 0.67em;
    width: 196%;
    height: 50px;
    grid-column: 2 span;

    @media (max-width: 450px) {
      width: 100%;
      margin-left: 0em;
    }

    @media (min-width: 451px) and (max-width: 900px) {
      width: 93%;
      height: 80px;
    }
  }

  &.pretensao {
    margin-left: 0.7em;
    width: 93%;

    @media (max-width: 450px) {
      margin-left: 0;
      width: 100%;
    }
  }

  &.pretensao_Clt {
    width: 46.4%;

    @media (min-width: 451px) and (max-width: 909px) {
      width: 93%;
    }

    @media (max-width: 450px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;

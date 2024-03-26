import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-left: 2em;

  &.ModalInfo {
    margin-bottom: 0;
  }
  &.vagasDisponiveis {
    margin: 0;
    margin-top: 1.3em;
    margin-left: 1em;
  }

  &.register {
    margin-top: 10px;
    margin-left: 1.4em;
  }

  &.filter {
    margin-left: 1em;
  }

  &.idiomas {
    margin-bottom: 20px;
  }

  &.escolaridade {
    margin: 0;
  }
  &.genero {
    margin: 0;
    margin: 5px 1.4em;
  }

  &.cursos {
    margin-left: 1.4em;
  }

  @media (max-width: 450px) {
    &.mobile {
      margin-left: 0;
    }

    &.esta_empregado {
      margin-bottom: 5.6em;
      margin-left: 0em;
    }

    &.pretensao {
      margin-left: 0;
    }

    &.localizacao {
      margin-left: 0;
    }
  }
`;

export const SelectContent = styled.div`
  width: 100%;

  &.statusTwo {
    margin-bottom: 1em;
  }

  &.register {
    width: 97.6%;
  }

  &.genero {
    width: 98.9%;
  }

  &.filterStatus {
    width: 104%;
  }

  &.vagasDisponiveis {
    width: 94%;
  }

  &.disponibilidade-check {
    width: 60%;
  }
  &.fitlerOne {
    width: 120%;
  }

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    color: #75757e;
    background-color: #fff;
    cursor: pointer;
    transition: border-color 0.3s ease;

    @media (min-width: 451px) and (max-width: 1400px) {
      font-size: 11px;
    }

    &.software {
      color: #313131;
    }
  }

  select:hover {
    border-color: #555;

    &.software {
      border-color: #313131;
    }
  }
  select::-ms-expand {
    display: none;
  }

  select option {
    font-size: 16px;

    @media (min-width: 451px) and (max-width: 1400px) {
      font-size: 12px;
    }
  }
`;

export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 14px;
  margin-bottom: 5px;
  color: #333;

  @media (min-width: 451px) and (max-width: 1400px) {
    font-size: 10px;
  }

  @media (max-width: 391px) {
    &.mobile {
      font-size: 13px;
    }
  }

  &.disponibilidade-check {
    margin-top: 1em;
  }
`;

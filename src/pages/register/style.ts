import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 10px auto;

  @media (max-width: 450px) {
    margin-left: 0;
    margin-top: 15%;
    width: 100%;
  }
  @media (min-width: 451px) and (max-width: 799px) {
    margin-left: 0;
    margin-top: 15%;
    width: 100%;
  }

  @media (min-width: 800px) and (max-width: 929px) {
    margin-left: 41%;
    margin-top: 5vw;
    width: 58%;
  }

  @media (min-width: 930px) and (max-width: 1300px) {
    width: 70%;
    margin: 1% 26%;
  }

  @media (min-width: 1301px) and (max-width: 1440px) {
    margin-left: 25vw;
    margin-top: 1%;
    width: 70%;
  }

  @media (min-width: 1441px) and (max-width: 1600px) {
    margin-left: 25vw;
    margin-top: 1%;
  }

  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-left: 28vw;
    margin-top: 3vw;
  }
  @media (min-width: 2560px) {
    margin: 2vw 28vw;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @media (min-width: 450px) and (max-width: 909px) {
    align-items: stretch;
  }
`;

export const Search = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &.localizacao {
    margin-top: 1em;
    margin-bottom: 2em;
  }
  &.Anexos {
    margin-top: 1em;
  }

  @media (min-width: 451px) and (max-width: 1400px) {
    margin-bottom: 15px;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 23px;
  color: #333;

  @media (max-width: 450px) {
    font-size: 15px;
  }

  @media (min-width: 451px) and (max-width: 909px) {
    font-size: 15px;
  }
  @media (min-width: 451px) and (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  justify-content: center;
  width: 100%;

  &.situacao {
    grid-template-columns: 1fr 1fr;

    @media (min-width: 450px) and (max-width: 929px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
  }

  &.disponibilidade {
    grid-template-columns: 1fr 1fr;

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 451px) and (max-width: 929px) {
      grid-template-columns: 1fr;
    }
  }

  &.localizacao {
    grid-template-columns: 1fr;
    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 451px) and (max-width: 909px) {
      grid-template-columns: 1fr;
    }
  }

  &.idiomas {
    grid-template-columns: 1fr 1fr;

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 451px) and (max-width: 909px) {
      grid-template-columns: 1fr;
    }
  }

  &.formacao {
    width: 94.5%;
    padding-left: 1.4em;
  }
`;

export const AddressFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  justify-content: center;
  margin-bottom: 1em;
`;

export const Form = styled.form`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;
export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.ContentButton {
    margin-top: 1em;
  }
`;
export const SubmitButton = styled.button`
  background-color: #9f3a3e;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #932725;
  }
`;
export const ContentMessage = styled.div`
  p {
    &.Err {
      color: #9f3a3e;
      font-weight: 600;
    }

    &.Sucess {
      color: #008000;
      font-weight: 600;
    }
  }
`;
export const FileInputContainer = styled.div`
  margin: 0 0 20px 34px;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: 1000px) and (max-width: 1300px) {
    margin: 0 1.5em;
  }
  p {
    display: block;
    font-size: 14px;
    margin-bottom: 3px;
    color: #333;
  }
  @media (max-width: 450px) {
    margin: 0;
  }

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 3px;
    color: #333;

    @media (min-width: 1000px) and (max-width: 1300px) {
      font-size: 10px;
    }
  }

  input {
    display: none;
  }

  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 10px 12px;
    cursor: pointer;
    background-color: #f9f9f9;
    border-radius: 4px;

    &:hover {
      background-color: #e3e3e3;
    }
  }
`;

export const ContentUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media (min-width: 1000px) and (max-width: 1300px) {
    width: 30%;
  }
`;

export const InputCheck = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0.5px solid #5e5656;
  background: #fff;
  cursor: pointer;
`;

export const ContentInputsOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  label {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 1000px) and (max-width: 1300px) {
    label {
      font-size: 12px;
    }
  }
`;

export const PGenti = styled.h6`
  font-size: 14px;
  position: absolute;
  top: -1.6em;
  font-weight: 400;
  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 13px;
  }
`;

export const ContentData = styled.div`
  display: flex;
  gap: 2em;
`;

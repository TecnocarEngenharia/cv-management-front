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
    margin: 2% 28%;
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
    grid-template-columns: 1fr 1fr;
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
`;

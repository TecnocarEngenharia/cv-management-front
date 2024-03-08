import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 800px;
  margin: 20px auto;
  border-radius: 8px;
  background: #f2f2f2;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 1300px) {
    width: 70vw;
    margin-top: 3%;
    max-height: 580px;
  }

  @media (min-width: 1200px) {
    width: 80%;
    height: 900px;
  }

  @media (min-width: 1920px) {
    width: 90%;
    height: 900px;
    margin-left: 20%;
    margin-top: 2%;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    height: 580px;
    margin-top:0;
  }
`;

export const ContainerTwo = styled.div`
  padding: 20px;
`;
export const ModalBG = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  color: #6a6666;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 150px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  button {
    cursor: pointer;
    border: none;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    background-color: #ffffff;
    color: #000;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    letter-spacing: 0.5px;
    transition: background 0.3s ease;
    margin: 0 1em;
    border: 0.5px solid #ccc;

    &:hover {
      background-color: #932725;
      color: #fff;
    }

    &.CV {
      width: 150px;
    }
  }
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 0 2em;

  @media (max-width: 450px) {
    position: absolute;
    background-color: #fff;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const DadosInfo = styled.div`
  /* Estilos originais */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  word-wrap: break-word;

  /* Adicionando posição relativa para conter o elemento interno */
  position: relative;

  /* Adicionando o contêiner interno com estilos ajustados */
  & > .content {
    position: relative;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 20px;
  }

  /* Aplicando sombra interna no contêiner interno */
  & > .content {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  & > .content {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

export const InfoName = styled.div`
  color: #333;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const InfoValue = styled.div`
  color: #666;
  font-size: 15px;
`;

export const ContainerGeneral = styled.div`
  margin-top: 1em;
`;

export const EditableInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: #666;
  padding: 4px;
  outline: none;
  width: 100%;
`;

export const ContantButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.5s all;

  button {
    width: 130px;
    height: 40px;
    border-radius: 7px;
    border: 0.5px solid #851f2c;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 0 10px;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

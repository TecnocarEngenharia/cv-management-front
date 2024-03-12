import styled from "styled-components";

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
export const ContentModal = styled.div`
  position: relative;
  margin: 18% auto;
  width: 500px;
  height: 480px;
  border-radius: 10px;
  border: 1px solid #6a6666;
  background: #fff;
  padding: 18px 36px;
`;

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
  h1 {
    color: #000;
    font-family: "Poppins";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
  }

  button {
    background-color: transparent;
    border-radius: 20px;
    height: 30px;
    width: 30px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
      background-color: #b67070;
      color: #000;
    }
  }
`;

export const ContentButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2em;

  button {
    cursor: pointer;
    width: 150px;
    height: 38px;
    border: none;
    margin-top: 14px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #851f2c;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #fff;
    font-family: "Poppins";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: 1s all;

    &:hover {
      border-radius: 10px;
      border: 0.5px solid #851f2c;
      background: #fff;
      color: #000;
    }
  }
`;

export const ContentDate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContentMessage = styled.div`
  position: absolute;
  top: 4.2em;
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #851f2c;
  p {
    margin-bottom: 2em;
  }
`;


export const ModalEditStyle = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ContentModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;

  & > * {
    margin: 0 1em;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

export const ContentModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 13px;
    white-space: nowrap;
  }

  & > * {
    margin: 0.5em 1em;
  }

  img {
    cursor: pointer;
  }
`;

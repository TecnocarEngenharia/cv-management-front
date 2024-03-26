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
export const Container = styled.div`
  position: relative;
  width: 50%;
  max-width: 1332px;
  height: 53vh;
  max-height: 90vh;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentLeft = styled.div`
  border-radius: 20px 0 0 20px;
  max-width: 60%;
  height: 100%;
  background-color: #851f2c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;

export const InfoWelcome = styled.p`
  color: #ffffff;
  max-width: 90%;
  letter-spacing: .2em;
  line-height: 1.5;
  font-size: 18px;
`;
export const ContentButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    padding: 10px 25px;
    background-color: #f0f0f0;
    color: #333;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 2em;

    &:hover {
      background-color: #ddd;
    }

    &.ButtonsReset {
      margin-top: 1em;
      margin-right: 3em;
      background-color: #851f2c;
      color: #ffffff;
    }
  }
`;

export const ContentPassword = styled.div`
  width: 500px;
`;

export const ContentForm = styled.div`
  height: 300px;
  background-color: #ffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    max-width: 98%;
  }
`;

export const Title = styled.h2`
  display: block;
  text-align: center;
  color: #333;
  margin-bottom: 2em;

  &.success {
    color: green;
  }

  &.error {
    color: red;
  }
`;

export const ContentRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 20px 0 20px;
`;

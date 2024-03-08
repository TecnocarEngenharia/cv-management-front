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

export const ContainerModal = styled.div`
  width: 800px;
  max-height: 620px;
  height: 70%;
  background-color: #ffffff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (min-height: 0px) and (max-height: 700px) {
    width: 600px;
    height: 500px;
    margin-top: 0;
  }

  &.userOn {
    height: 60%;
  }
`;

export const ContentTitle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #851f2c;
    color: #fff;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ContentsInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin: 2em 1.4em 0 0;
  background: #851f2c;
  color: #fff;
  border: none;
  width: 140px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;

  color: #fff;
  font-family: Poppins;
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
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ResetPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2.4em;
  right: 1.7em;
  width: 60px;
  height: 25px;
  background-color: #b3b3b3;
  color: #000000;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
`;

export const ContentPassword = styled.div`
  position: relative;
`;

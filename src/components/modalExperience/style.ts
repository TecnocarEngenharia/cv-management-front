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
  margin: 18% auto;
  width: 408px;
  height: 582px;
  border-radius: 10px;
  border: 1px solid #6a6666;
  background: #fff;
  padding: 18px 36px;
`;
export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const ContentInputCheck = styled.div`
  margin: 14px 0;
  display: flex;
  gap: 12px;
  align-items: center;

  span {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  label {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  div {
    display: flex;
    align-items: center;
    gap: 6px;
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
    width: 180px;
    height: 38px;
    border: none;
    margin-top: 30px;
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

export const FeedbackMessage = styled.p`
  display: block;
  text-align: center;
  color: #851f2c;
`;

export const ContentLabel = styled.label`
  display: block;
  font-size: 14px;
  margin: 5px 0px;
  color: #333;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  border: 1px solid #333;
`;

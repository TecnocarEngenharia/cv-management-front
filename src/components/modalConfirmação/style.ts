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
  width: 30%;
  max-width: 600px;
  max-height: 90vh;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1100px) and (max-width: 1300px) {
    width: 40%;
  }
`;

export const Title = styled.h3`
  margin-top: 24px;
  color: #252b42;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.1px;
  margin-bottom: 24px;
  text-align: center;

  @media (min-width: 1100px) and (max-width: 1300px) {
    font-size: 16px;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: #646464;
  margin-bottom: 24px;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 24px;

  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    transition: background-color 0.3s ease;

    &:first-child {
      background-color: #c7c7c7;
      color: #fff;
      transition: 0.5s all;

      &:hover {
        background-color: #851f2c;
        color: #FFFFFF;
      }
    }

    &:last-child {
      background-color: #4099ff;
      color: #fff;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

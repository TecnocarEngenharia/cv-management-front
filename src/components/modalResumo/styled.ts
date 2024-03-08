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
  max-width: 400px;
  max-height: 90vh;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-top: 24px;
  color: #252b42;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.1px;
`;

export const Resumo = styled.p`
  margin: 1em;
  text-align: justify;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #313131;
`;

export const Button = styled.button`
  width: 10%;
  height: auto;
  min-width: 90px;
  padding: 10px;
  border-radius: 10px;
  border: 0.5px solid #851f2c;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.5s all;
  margin-bottom: 14px;

  &:hover {
    background-color: #851f2c;
    color: #ffff;
  }
`;

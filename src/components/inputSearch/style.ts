import styled from "styled-components";
import IconLupa from "../../image/icon_lupa_black.svg";

export const ContainerSearch = styled.div`
  width: 1198px;
  height: 111px;
  border-radius: 10px 10px 0 0;
  background: #fff;

  @media (min-width: 600px) {
    margin-top: 2%;
    margin-left: 10%;
  }

  @media (min-width: 1200px) {
    width: 1198px;
    margin-top: -2%;
    margin-left: 21%;
  }

  @media (max-width: 1920px) {
    margin-top: -5%;
    margin-left: 16%;
    width: 75.4%;
  }

  @media (min-width: 2511px) {
    width: 1960px;
    margin-top: 2%;
    margin-left: 10.4%;
  }

  @media (min-width: 2000px) {
    margin-top: -3%;
    margin-left: 12%;
    width: 75%;
  }

  @media (max-width: 1650px) {
    margin-top: -2%;
    margin-left: 21%;
    width: 70%;
  }

  @media (min-width: 1350px) and (max-width: 1440px) {
    margin-top: -6%;
    margin-left: 20.3%;
    width: 75%;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    margin-top: 2em;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentInput = styled.input`
  width: 876px;
  height: 44px;

  border-radius: 10px;
  background: #f2f2f2 url(${IconLupa}) no-repeat 10px center;
  background-size: 24px;
  box-shadow: 0px 4px 10px 0px rgba(133, 31, 44, 0.09);
  border: none;
  padding-left: 57px;
  outline: none;

  &::placeholder {
    color: #6a6666;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 2560px) {
    width: 1100px;
  }

  @media (max-width: 1650px) {
    width: 600px;
  }
`;

export const ContentImage = styled.img`
  width: 78px;
  height: 44px;
  border-radius: 10px;
  background: #851f2c;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const ContentButton = styled.button`
  width: 78px;
  height: 44px;
  border-radius: 10px;
  background: #851f2c;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    width: 35px;
    height: 35px;
  }
`;

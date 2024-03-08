import styled from "styled-components";

export const CardInfo = styled.div`
  width: 902px;
  height: 207px;
  margin-top: 81px;

  background: linear-gradient(
    267deg,
    rgba(133, 31, 44, 0.3) 0%,
    rgba(255, 255, 255, 0.16) 14.5%,
    rgba(255, 255, 255, 0.05) 81%,
    rgba(133, 31, 44, 0.3) 100%
  );

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;

  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-left: 1%;
    width: 1200px;
  }

  @media (min-width: 930px) and (max-width: 1300px) {
    width: 62vw;
  }

  @media (max-width: 450px) {
    width: 390px;
    margin-top: 60px;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    margin-top: 45px;
    height: 180px;
  }
`;

export const ImageTutorial = styled.img`
  padding-right: 76px;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const ContentCard = styled.div`
  max-width: 570px;
  height: 95px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 37px;
  padding-left: 67px;

  h3 {
    color: #000;

    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (min-height: 0px) and (max-height: 700px) {
      font-size: 18px;
    }
  }

  p {
    color: #000;

    text-align: justify;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-height: 0px) and (max-height: 700px) {
      font-size: 14px;
    }
  }

  span {
    color: #851f2c;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 3px;
  }

  @media (max-width: 450px) {
    max-width: 350px;
    padding-left: 35px;
    padding-top: 32px;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

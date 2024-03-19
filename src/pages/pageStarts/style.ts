import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-left: 19em;

  @media (max-width: 1300px) {
    margin-left: 22em;
  }

  @media (max-width: 450px) {
    margin-left: 0;
  }

  @media (max-width: 390px) {
    margin-left: 0em;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    margin-left: 17em;
  }
`;

export const CardVideo = styled.div`
  width: 900px;
  height: 360px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-left: 1%;
    width: 1200px;
    height: 400px;
  }

  @media (min-width: 930px) and (max-width: 1300px) {
    width: 62vw;
  }

  @media (max-width: 450px) {
    margin-left: 0;
    width: 385px;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    height: 320px;
    width: 90%;
  }
`;

export const ContentVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 320px;
  padding-left: 30px;
  padding-top: 26px;
  

  h4 {
    color: #000;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (min-height: 0px) and (max-height: 700px) {
      font-size: 12px;
    }
  }


`;

export const ContainerPlay = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Linhaa = styled.div`
  width: 329px;
  height: 3px;

  background: #9b3f39;
  margin: 14px 0 12px 16px;
`;

export const Description = styled.p`
  padding-left: 21px;
  color: #544c4c;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;

  @media (max-height: 650px) {
    margin-bottom: 8px;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 12px;
  }
`;

export const SVGICON = styled.img`
  width: 261px;
  height: 201px;
  margin: 18px 0 0 40px;

  @media (max-width: 450px) {
    display: none;
  }

  @media (max-height: 650px) {
    width: 201px;
    height: 180px;
    margin: 0;
  }
`;

export const ContainerVideo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContentCard = styled.div`
  width: 435px;
  height: 201px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(133, 31, 44, 0.56);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1920px) {
    width: 485px;
    height: 231px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  @media (min-width: 930px) and (max-width: 1300px) {
    width: 350px;
  }

  @media (min-height: 0px) and (max-height: 700px) {
   height: 150px;
  }
`;

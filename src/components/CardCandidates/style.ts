import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  justify-content: center;
  margin: 30px 30px 0;

  @media (min-width: 1200px) {
    margin-top: 5%;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 601px) and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 300px;
  height: 246px;
  border-radius: 20px;
  background-color: #f2f2f2;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-height: 0px) and (max-height: 700px) {
    width: 260px;
    height: 216px;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 73.4vw;
  height: 80vh;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 5%;
  margin-left: 5%;

  @media (min-width: 600px) {
    margin-top: 2%;
    margin-left: 10%;
  }

  @media (min-width: 1200px) {
    margin-top: 5%;
    margin-left: 24%;
  }

  @media (min-width: 2560px) {
    margin-top: 1%;
    margin-left: -15%;
  }
`;
export const Title = styled.h4`
  padding: 1em;
  text-align: center;
  font-weight: 500;
  color: #9b3f39;

  @media (min-width: 1100px) and (max-width: 1300px) {
    font-size: 14px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 15px;

  span {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    p {
      font-size: 13px;
    }
    span {
      font-size: 13px;
    }
  }
`;

export const InfoCandidate = styled.div`
  color: #5a5a5a;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 12px;
  }
`;
export const Button = styled.button`
  width: 103px;
  height: 32px;
  border-radius: 20px;
  background: #b67070;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: #ffffff;
  position: absolute;
  bottom: 1em;
  right: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6b2323;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 12px;
    width: 80px;
    height: 25px;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: -1em;
  right: 0;
`;

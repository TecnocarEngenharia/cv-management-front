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
  width: 70%;
  max-width: 1332px;
  height: 83vh;
  max-height: 90vh;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1900px) {
    width: 60%;
    height: 60vh;
  }

  @media (max-width: 490px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  margin-top: 31px;
  width: 90%;
  height: 25%;
  border-radius: 10px;
  border: 1px solid #851f2c;
  background: rgba(217, 217, 217, 0);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 490px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const Linha = styled.div`
  width: 2px;
  height: 90%;
  background-color: #851f2c;
  transform: rotate(90);

  @media (max-width: 490px) {
    width: 90%;
    height: 1px;
  }
`;

export const Name = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 20%;

  @media (min-width: 1900px) {
    font-size: 20px;
  }

  @media (max-width: 490px) {
    display: block;
    max-width: 90%;
    margin: 1em 0;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (max-width: 490px) {
    display: block;
    margin: 1em 0;
  }

  p {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (min-width: 1900px) {
      font-size: 20px;
    }
  }

  span {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 4px;

    @media (min-width: 1900px) {
      font-size: 18px;
    }
  }
`;
export const PA = styled.span`
  position: absolute;
  right: 2em;
  bottom: 0.8em;
  font-size: 13px;
  cursor: pointer;
  color: #75757e;
  transition: 0.5s all;

  &:hover {
    text-decoration: underline;
    color: #313131;
  }
`;

export const ContentTeste = styled.div`
  width: 100%;
  position: relative;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 490px) {
    margin: 1em 0;
  }

  button {
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

    &:hover {
      background-color: #851f2c;
      color: #ffff;
    }

    @media (min-width: 1900px) {
      width: 130px;
      height: 51px;
      font-size: 15px;
    }
  }

  div {
    display: flex;
    gap: 8px;
  }
`;

export const NavBar = styled.div`
  width: 90%;
  border-bottom: 1px solid #851f2c;
  display: flex;
  justify-content: space-between;

  @media (max-width: 490px) {
    flex-wrap: wrap;
    align-items: center;
    border: none;
    gap: 0.5em;
  }

  p {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;

    &.check {
      color: #851f2c;
      font-weight: 700;
    }

    @media (min-width: 1900px) {
      font-size: 16px;
    }

    @media (max-width: 490px) {
      white-space: nowrap;
      font-size: 13px;
      border-bottom: 1px solid #851f2c;
    }
  }

  @media (min-width: 1100px) and (max-width: 1300px) {

    p {
      font-size: 12px;
    }
  }
`;

export const ContentViewOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  margin-top: 30px;
`;

export const ContentFirstInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const ContentSecondInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const Footeer = styled.footer`
  position: absolute;
  bottom: 0em;
  right: 1.3em;
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 12%;
    height: auto;
    min-width: 90px;
    padding: 10px;
    border-radius: 10px;
    border: 0.5px solid #851f2c;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 0.5s all;
    margin-right: 2em;

    @media (max-width: 490px) {
      width: 30%;
    }
    &:hover {
      background-color: #851f2c;
      color: #ffff;
    }
  }

  @media (max-width: 490px) {
    position: static;
    bottom: 0em;
    margin: 1em 0;
  }
`;

export const ContentThreeInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const ContentTwoView = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 25px;
`;
export const ContentTwoViewContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 25px;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const ContentTwoViewContainerThree = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const ContentThreeView = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  gap: 25px;
`;
export const ContentThreeViewContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 25px;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const ContentThreeViewContainerThree = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const ContentFourView = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  width: 90%;

  @media (max-width: 490px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const ContentFourViewTwo = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ContentFourViewThree = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ContentFourViewFour = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 1em;
`;

export const ContentFiveView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
`;
export const ContentFiveViewTwo = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const ContentFiveViewThree = styled.div`
  display: flex;
  gap: 15px;
`;

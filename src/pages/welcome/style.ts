import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 3em;
  left: 10em;

  @media (min-width: 300px) and (max-width: 800px) {
    top: 2em;
    left: 6em;
    width: 200px;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    left: 5em;
    width: 150px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    top: 2em;
    left: 7em;
    width: 150px;
  }

  @media (min-width: 1350px) and (max-width: 1550px) {
    top: 2em;
    left: 8em;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 500px;

  @media (min-width: 300px) and (max-width: 800px) {
    margin-top: 8em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;



`;

export const Title = styled.h1`
  color: #c53f3f;
  font-family: Poppins;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 300px) and (max-width: 800px) {
    font-size: 22px;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    font-size: 24px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    font-size: 26px;
  }

  @media (min-width: 1350px) and (max-width: 1550px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  color: #6a6666;
  text-align: justify;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 460px;

  @media (min-width: 300px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    font-size: 13px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    font-size: 14px;
    max-width: 350px;
  }
  @media (min-width: 1350px) and (max-width: 1550px) {
    font-size: 20px;
  }
`;

export const Button = styled.div`
  color: #6a6666;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 325px;
  height: 39px;
  border-radius: 50px;
  border: 1px solid #6a6666;
  background: rgba(217, 217, 217, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 1s all;

  &:hover {
    background-color: #6a6666;
    color: #fff;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    width: 270px;
  }
`;

export const ContentImage = styled.div`
  img {
    width: 750px;
    height: 500px;

    @media (min-width: 300px) and (max-width: 800px) {
      width: 300px;
      height: 250px;
    }

    @media (min-width: 900px) and (max-width: 1100px) {
      width: 600px;
      height: 300px;
    }

    @media (min-width: 1150px) and (max-width: 1300px) {
      width: 600px;
      height: 300px;
    }

    @media (min-width: 1350px) and (max-width: 1550px) {
      width: 650px;
      height: 350px;
    }
  }
`;

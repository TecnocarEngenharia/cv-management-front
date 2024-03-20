import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 74.4vw;
  height: 88vh;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 5%;
  margin-left: 5%;
  justify-content: center;
  align-items: start;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9b3f39;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin-top: 14%;
    height: 150%;
  }

  @media (min-width: 601px) and (max-width: 1199px) {
    margin-left: 34%;
    width: 50vw;
  }

  @media (min-width: 1200px) and (max-width: 1299px) {
    margin-left: 23%;
    width: 75vw;
  }

  @media (min-width: 1300px) and (max-width: 1400px) {
    margin-left: 22.5%;
    width: 76vw;
  }

  @media (min-width: 1401px) and (max-width: 1599px) {
    margin-left: 26%;
    width: 73vw;
  }

  @media (min-width: 1600px) and (max-width: 1920px) {
    margin-top: 4%;
    margin-left: 22.2%;
  }

  @media (min-width: 1923px) and (max-width: 2560px) {
    margin-top: 3%;
    margin-left: 18.2%;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    margin-top: 4%;
  }

  @media (max-width: 450px) {
    width: 90%;
    margin-top: 30%;
    height: 100%;
  }
`;

export const ContainerList = styled.div`
  position: absolute;
  right: 5vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  margin-left: 2em;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  &.list {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  @media (min-width: 2560px) {
    right: 2vw;
  }

  @media (min-width: 1920px) {
    right: 2vw;
  }

  @media (max-width: 450px) {
    display: none;
  }
  @media (min-width: 601px) and (max-width: 1199px) {
    right: 0vw;
  }

  @media (min-width: 1200px) and (max-width: 1299px) {
    right: 3vw;
    img {
      width: 30px;
    }
  }
`;

export const ContainerExcel = styled.div`
  position: absolute;
  right: 19vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 2560px) {
    right: 12vw;
  }

  @media (min-width: 1920px) {
    right: 12vw;
  }
  @media (max-width: 450px) {
    right: 25vw;
  }
  @media (min-width: 601px) and (max-width: 1199px) {
    right: 8vw;
  }
  @media (min-width: 1200px) and (max-width: 1299px) {
    right: 19vw;
    img {
      width: 30px;
    }
  }
`;

export const ContainerBloco = styled.div`
  position: absolute;
  right: 12vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  &.bloco {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  @media (min-width: 2560px) {
    right: 7vw;
  }

  @media (min-width: 1920px) {
    right: 7vw;
  }

  @media (max-width: 450px) {
    right: 0vw;
  }

  @media (min-width: 601px) and (max-width: 1199px) {
    right: 16vw;
  }
  @media (min-width: 1200px) and (max-width: 1299px) {
    right: 11vw;
    img {
      width: 30px;
    }
  }
`;

export const ContainerFilter = styled.div`
  position: absolute;
  right: 26vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 2560px) {
    right: 7vw;
  }

  @media (min-width: 1920px) {
    right: 17vw;
  }
  @media (max-width: 450px) {
    right: 50vw;
  }

  @media (min-width: 601px) and (max-width: 1199px) {
    right: 24vw;
  }
  @media (min-width: 1200px) and (max-width: 1299px) {
    right: 27vw;
    img {
      width: 30px;
    }
  }
`;

export const ContainerNoFilter = styled.div`
  position: absolute;
  right: 33vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 2560px) {
    right: 7vw;
  }

  @media (min-width: 1920px) {
    right: 22vw;
  }

  @media (min-width: 601px) and (max-width: 1199px) {
    right: 32vw;
  }
  @media (min-width: 1200px) and (max-width: 1299px) {
    right: 35vw;
    img {
      width: 30px;
    }
  }
`;

export const Content = styled.div`
  position: relative;
`;

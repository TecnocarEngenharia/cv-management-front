import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 270px;
  height: 100vh;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 0) and (max-width: 799px) {
    display: none;
  }

  @media (min-height: 500px) and (max-height: 700px) {
    overflow-y: auto;
    gap: 1em;
    width: 250px;
  }

  @media (min-width: 800px) and (max-width: 1100px) {
    width: 200px;
    overflow-y: auto;
    gap: 1em;
  }
`;

export const ImageLogo = styled.img`
  margin: 40px 0;
  object-fit: cover;

  @media (min-width: 800px) and (max-width: 1100px) {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 327px;
  height: 55px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.3em;
  padding-left: 16px;
  cursor: pointer;

  p {
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    @media (min-height: 0px) and (max-height: 700px) {
      font-size: 12px;
    }

    &.active {
      color: #fff;
    }

    &.sair {
      color: #851f2c;
      font-size: 16px;
      font-weight: 600;
    }

    @media (min-width: 800px) and (max-width: 1100px) {
      font-size: 12px;
    }
  }

  &.active {
    background: #851f2c;
    color: #fff;

    &:hover {
      background: #851f2c;
      color: #fff;
    }
  }

  &:not(.active):hover {
    background: #eee;
  }
  @media (min-height: 0px) and (max-height: 700px) {
    width: 230px;
    height: 35px;

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
  }

  @media (min-width: 0) and (max-width: 600px) {
    display: flex;
    align-items: center;
    height: 55px;
  }

  @media (min-width: 800px) and (max-width: 1100px) {
    width: 190px;
    height: 30px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const SairText = styled.p`
  position: fixed;
  bottom: 0;
  left: 14em;
  color: #851f2c;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 16px;
  cursor: pointer;
  width: 10%;

  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 13px;
    right: 0;
    left:14em;
  }

  @media (min-width: 800px) and (max-width: 1100px) {
    left: 0;
    font-size: 10px;
  }
`;

export const ListHeader = styled.div`
  height: 200px;
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ced4da;
  gap: 10px;
  margin-top: 2em;

  p {
    font-size: 14px;
    margin: 0 15px;
    color: #495057;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      border-bottom: 1px solid #495057;
      width: 80%;
    }
  }
`;

export const Drop = styled.div`
  display: none;

  @media (min-width: 0) and (max-width: 500px) {
    width: 100vw;
    height: 60px;
    background-color: #f2f2f2;
    display: block;
    position: fixed;
    top: 0;

    img {
      padding: 10px;
    }
  }
`;

import styled from "styled-components";

interface PageButtonProps {
  $active: boolean;
}

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-content: center;
  margin: 30px 30px 0;

  @media (min-width: 1200px) {
    margin-top: 5%;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 601px) and (max-width: 1300px) {
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
    width: 280px;
    height: 226px;
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
`;

export const InfoCandidate = styled.div`
  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 12px;
  }
  color: #5a5a5a;

  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  position: fixed;
  bottom: 4.4em;
  left: 80%;
  transform: translateX(-50%);

  @media (max-width: 450px) {
    display: none;
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  width: 30px;
  height: 31px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#b67070" : "#fff")};
  color: ${(props) => (props.$active ? "#fff" : "#333")};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const Image = styled.img`
  position: absolute;
  top: -1em;
  right: 0;
`;

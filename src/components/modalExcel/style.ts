import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;

  @media (min-width: 1200px) {
    left: 6em;
  }

`;

export const Content = styled.div`
  position: relative;
  width: 505px;
  height: 355px;

  border-radius: 5px;
  background: #f2f2f2;

  box-shadow: 2px 4px 4px 4px rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    width: 370px;
    height: 350px;
  }
`;

export const Title = styled.h2`
  color: #9b3f39;

  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 1em 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 32px;

  border-radius: 10px;
  background: #fff;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #cc1616;

  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  bottom: 1em;
  right: 1em;
  cursor: pointer;

  transition: background 0.3s ease, color 0.3s ease;

  user-select: none;

  &:hover {
    color: #fff;
    background: #b67070;
  }
`;

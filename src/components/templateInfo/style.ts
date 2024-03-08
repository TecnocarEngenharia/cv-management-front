// style.js

import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  right: 0;
  top: 4.4em;
  z-index: 1000;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1dvh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra suave */
`;

export const InfoWrapper = styled.div`
  margin-bottom: 10px;
`;

export const InfoText = styled.p`
  margin: 0;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 2px solid #cecece;
  
  &:hover {
    border-bottom: 2px solid #000;
  }
`;


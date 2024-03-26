import styled from "styled-components";

export const Container = styled.div`
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

export const Content = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 1124px;
  height: 600px;
  position: relative;
  display: grid;
  grid-template-columns: 291px auto 257px 577px 300px 300px;
  grid-template-rows: 0 95px 180px 180px; /* Ajuste nas linhas */
  gap: 20px;
  position: relative;
  left: 2em;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  @media (min-width :1100px) and (max-width: 1300px) {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 550px;
  }
`;

export const ContentRange = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
  width: 291px;
  height: 293px;
  border-radius: 10px;
  border: 1px solid #b67070;
  background: rgba(217, 217, 217, 0);
  margin: 24px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentCheck = styled.div`
  margin-top: 24px;
  grid-column: 3 / span 2; /* Ajuste na coluna */
  grid-row: 1 / span 3; /* Ajuste na linha */

  width: 271px;
  height: 293px;
  border-radius: 10px;
  border: 1px solid #b67070;

  background: rgba(217, 217, 217, 0);
`;

export const ContentSelect = styled.div`
  width: 480px;
  height: 293px;
  border-radius: 10px;
  border: 1px solid #b67070;
  background: rgba(217, 217, 217, 0);
  margin: 24px 0 0 14px;
  grid-column: 4 / span 2; /* Ajuste na coluna */
  grid-row: 1 / span 3; /* Ajuste na linha */
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    width: 98%;
  }
`;

export const ContentSelectInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #000;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContentOptions = styled.div`
  width: 794px;
  height: 263px;
  border-radius: 10px;
  border: 1px solid #b67070;
  background: rgba(217, 217, 217, 0);
  margin-left: 20px;
  grid-column: 1 / span 5; 
  grid-row: 4; 
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const ContentButtons = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
  

  height: 200px;
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 13px;

  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: #851f2c;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    border: none;

    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;

export const CardRecrutamento = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  border-radius: 10px 10px 0 0;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
  text-align: center;

  top: 5em;
  left: -6.4em;
  transform: rotate(-90deg);
  border: 2px solid #851f2c;
  border-bottom: none;
`;

export const ContentSelectFormations = styled.div`
  display: flex;
  width: 100%;
`;

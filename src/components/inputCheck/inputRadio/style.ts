import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-left: 2em;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  label {
    margin-left: 0.5em;
  }
`;

export const ContentInput = styled.div`
  display: flex;
  align-items: center;

  input[type="radio"] {
    transform: scale(1.8);
    margin-right: 5px;
    border: 2px solid black;
  }

  label {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 16px;
  margin-bottom: 5px;
  color: #000000;

  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

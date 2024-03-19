import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-left: 2em;

  &.UF{
    margin-bottom: 0;
    
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin: 5px 0px;
  color: #333;
  width: 100%;
`;

export const SelectContent = styled.div`
  width: 100%;

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    color: #75757e;
    background-color: #fff;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &.UF {
      width: 93%;
    }
  }

  select:hover {
    border-color: #75757e;
  }

  select::-ms-expand {
    display: none;
  }

  select option {
    font-size: 16px;
  }
`;

export const Input = styled.label`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; // Ajuste a largura desejada entre as opções

  label {
    margin-left: 0.5em;
  }
`;

export const ContentInput = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
  &.UF {
    margin-top: .35em;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-weight: 400;

  option {
    font-weight: 400;
  }
`;

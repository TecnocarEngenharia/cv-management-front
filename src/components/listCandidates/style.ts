import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 75.4vw;
  margin: 20px auto;

  @media (min-width: 2560px) {
    max-width: 80vw;
    margin-top: 3%;
    margin-left: 20.2%;
  }

  @media screen and (max-width: 1580px) {
    width: 73vw;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  height: 20px; /* Alterado para um valor maior */
  padding: 10px; /* Adicionado padding */
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const TableHeaderCentered = styled(TableHeader)`
  text-align: center;
`;

export const TableHeaderBreakWord = styled(TableHeader)`
  word-break: break-word;
`;

export const TableHeaderSmall = styled(TableHeader)`
  width: 50px;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 13px;
  word-break: break-word;
  font-size: 12px;
  text-align: center;

  @media screen and (max-width: 1400px) {
    font-size: 10px;
  }

  &.idade {
    text-align: center;
  }

  &.email {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.info {
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
  }

  &.name {
    max-width: 100px; /* Defina o valor máximo desejado */
    overflow: hidden;
    text-overflow: ellipsis;
    
  }
`;

export const TableDataRow = styled.tr`
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableHeaderSpecial = styled(TableHeader)`
  background-color: #fff;
  transition: background-color 0.3s, box-shadow 0.3s;
`;

export const TableBody = styled.tbody`
  tr {
    transition: background-color 0.3s;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    border: none;
    border-bottom: 1px solid #ddd;
  }

  td:first-child {
    border-left: 1px solid #ddd;
  }

  td:last-child {
    border-right: 1px solid #ddd;
  }
`;

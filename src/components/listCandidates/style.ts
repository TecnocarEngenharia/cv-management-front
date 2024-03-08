// style.js

import styled from "styled-components";

interface PageButtonProps {
  $active: boolean;
}

export const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 75.4vw;
  margin: 20px auto;

  @media (min-width: 2560px) {
    max-width: 80vw;
    margin-top: 3%;
    margin-left: 20.2%;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    border-radius: 10px;
  }
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 13px;
  text-align: left;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  border: 1px solid #ddd;
  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 10px;
  }
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
  text-align: start;

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
    text-align: center;
  }

  &.nome {
    max-width: 100px;
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

  th {
    border: none;
  }
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

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  position: fixed;
  bottom: 4.4em;
  left: 80%;
  transform: translateX(-50%);
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

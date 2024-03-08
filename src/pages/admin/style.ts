import styled from "styled-components";

interface PageButtonProps {
  $active: boolean;
}

export const Table = styled.table`
  width: 75%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 20px;
  cursor: pointer;

  th,
  td {
    border: 1px solid #ddd;
    padding: 25px;
    text-align: left;
  }

  th:hover {
    background-color: #ecf0f1;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  }

  th span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  th span::before,
  th span::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #ddd;
    margin: 0 10px;
  }

  th span:hover::before,
  th span:hover::after {
    background-color: transparent;
  }

  th span:hover {
    cursor: pointer;
  }

  th span svg {
    margin-right: 5px;
  }

  th span::first-child {
    margin-left: 10px;
  }

  th span::last-child {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    margin-top: 1%;
    margin-left: 10%;
  }

  @media (min-width: 2511px) {
    margin-top: -2%;
    margin-left: 16.3%;
    width: 78%;
  }

  @media (max-width: 1920px) {
    margin-top: -10%;
    margin-left: 20.3%;
    width: 75.4%;
  }

  @media (max-width: 1650px) {
    margin-top: -7%;
    margin-left: 25.3%;
    width: 70.4%;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 12px;
    margin-top: -5em;
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

export const CabecalhoTable = styled.tr`
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: background-color 0.3s, box-shadow 0.3s;

  th {
    border: none;
  }
`;

export const RegisterUser = styled.button`
  position: absolute;
  right: 2.4em;
  bottom: 2em;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0 0 21em;
  gap: 7px;
`;

export const PaginationItem = styled.div<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 31px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#851f2c" : "#fff")};
  color: ${(props) => (props.$active ? "#fff" : "#333")};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
`;

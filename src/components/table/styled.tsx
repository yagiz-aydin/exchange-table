import styled from "styled-components";

export const TableContainer = styled.div`
  border-radius: 12px;
  background: white;
  max-width: 800px;
`;

export const Table = styled.table`
  font-weight: normal;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  table-layout: fixed;
  @media (max-width: 767px) {
    display: flex;
    border-collapse: none;
  }
`;

export const TableHead = styled.thead`
  background: #d4d4d4;
`;

export const HeadCell = styled.th`
  text-align: center;
  color: #000;
  padding: 16px;
  border: 1px solid #b8b8b8;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const TableBody = styled.tbody`
  td:first-child {
    font-weight: 800;
    background: #f8f8f8;
  }
  overflow-y: auto;
`;

export const BodyRow = styled.tr`
  @media (max-width: 767px) {
    display: table-cell;
  }
`;

export const HeadRow = styled.tr``;

export const BodyCell = styled.td`
  text-align: center;
  border: 1px solid #b8b8b8;
  padding: 16px;
  @media (max-width: 767px) {
    display: block;
  }
`;

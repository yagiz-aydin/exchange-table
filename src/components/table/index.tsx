import React from "react";
import { ITableProps, ITableRow } from "./types";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  HeadCell,
  BodyRow,
  BodyCell,
  HeadRow,
} from "./styled";
import { CurrencySymbols, ECurrency } from "../../types/enum";

const DataTable = ({
  tableDatas,
  columns,
  dynamicValueKey,
}: ITableProps) => {

  const Row = ({ row }: { row: ITableRow }) => {
    const _row = Object.keys(row);
    const isCellDynamicCurrency = (key: number) =>
      typeof row[columns[key].value as keyof typeof row] === "object";

    return (
      <BodyRow>
        {_row.map((_, key) => (
          <BodyCell
            key={`${_}-${key}`}
            style={{
              background:
                isCellDynamicCurrency(key) &&
                row[dynamicValueKey as string].status,
            }}
          >
            {isCellDynamicCurrency(key)
              ? `${CurrencySymbols[row.code as ECurrency]} ${
                  row[dynamicValueKey as string].value
                }`
              : row[columns[key].value as keyof typeof row]}
          </BodyCell>
        ))}
      </BodyRow>
    );
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeadRow>
            {columns.map((column, key) => (
              <HeadCell key={key}>{column.label}</HeadCell>
            ))}
          </HeadRow>
        </TableHead>
        <TableBody>
          {tableDatas.map((row, key) => <Row row={row} key={key} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

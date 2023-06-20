import React from "react";
import {ITableProps, ITableRow} from "./types";
import {TableContainer, Table, TableHead, TableBody, HeadCell, BodyRow, BodyCell, HeadRow} from "./styled";
import ContentLoader from "react-content-loader";

const DataTable = ({tableDatas, columns, loading}: ITableProps) => {
  const skeletonRowLength = 4;
  const Row = ({row}: {row: ITableRow}) => (
    <BodyRow>
      {Object.keys(row).map(
        (_, key) =>
          !columns[key]?.hidden && (
            <BodyCell key={key}>
                {row[columns[key].value as keyof typeof row]}
            </BodyCell>
          )
      )}
    </BodyRow>
  );

  const RowOnLoading = () => (
    <BodyRow>
      {columns.map(
        (column) =>
          !column?.hidden && (
            <BodyCell>
              <ContentLoader
                speed={2}
                width="100%"
                viewBox="0 0 800 42"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="18" rx="4" ry="4" width="100%" height="42" />
              </ContentLoader>
            </BodyCell>
          )
      )}
    </BodyRow>
  );

  const NoDataView = () => <>No Data</>;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeadRow>
            {columns.map((column, key) => !column.hidden && <HeadCell key={key}>{column.label}</HeadCell>)}
          </HeadRow>
        </TableHead>
        <TableBody>
          {loading ? (
            Array.from(Array(skeletonRowLength).keys()).map((i) => <RowOnLoading />)
          ) : tableDatas.length > 0 ? (
            tableDatas.map((row, key) => <Row row={row} />)
          ) : (
            <NoDataView />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

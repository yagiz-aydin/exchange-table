import React from 'react'
import { ITableProps, ITableRow, ITableTypeSwitch } from './types'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  HeadCell,
  BodyRow,
  BodyCell,
  HeadRow,
} from './styled'
import { CurrencySymbols, ECurrency } from '../../types/enum'

const DataTable = ({
  tableDatas,
  columns,
  dynamicValueKey,
  type,
}: ITableProps) => {
  const Row = ({ row }: { row: ITableRow }) => {
    const _row = Object.keys(row)
    return (
      <BodyRow>
        {_row.map((_, key) => (
          <BodyCell key={`${_}-${key}`}>
            {row[columns[key].value as keyof typeof row]}
          </BodyCell>
        ))}
      </BodyRow>
    )
  }

  const CurrencyRow = ({ row }: { row: ITableRow }) => {
    const _row = Object.keys(row)

    const isCellCurrency = (key: number) =>
      typeof row[columns[key].value as keyof typeof row] === 'object'

    const currencyFormatter = (key: number) =>
      isCellCurrency(key)
        ? `${CurrencySymbols[row.code as ECurrency]} ${
            row[dynamicValueKey as string].value
          }`
        : row[columns[key].value as keyof typeof row]

    const currencyCellColor = (key: number) =>
      isCellCurrency(key) && {
        background: row[dynamicValueKey as string].status,
        fontSize: '18px',
        fontWeight: '600',
      }

    return (
      <BodyRow>
        {_row.map((_, key) => (
          <BodyCell key={`${_}-${key}`} style={currencyCellColor(key) || {}}>
            {currencyFormatter(key)}
          </BodyCell>
        ))}
      </BodyRow>
    )
  }

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
          {tableDatas.map((row, key) => {
            switch (type) {
              case 'data':
                return <Row row={row} key={key} />
              case 'currency':
                return <CurrencyRow row={row} key={key} />
              default:
                return <Row row={row} key={key} />
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable

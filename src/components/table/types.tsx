export interface IColumnProps {
  value?: string;
  label: string;
}

export interface ITableProps {
  type: TableTypes;
  tableDatas: Array<ITableRow>;
  columns: Array<IColumnProps>;
  loading?: boolean;
  dynamicValueKey?: string;
}

export interface ITableTypeSwitch {
  type: TableTypes;
  row: ITableRow;
  key: number;
}

export type TableTypes = "data" | "currency";

export type ITableRow = any; // More additional types | Array<Currency> ...

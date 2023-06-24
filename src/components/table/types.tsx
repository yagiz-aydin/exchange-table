export interface IColumnProps {
  value?: string;
  label: string;
}

export interface ITableProps {
  tableDatas: Array<ITableRow>;
  columns: Array<IColumnProps>;
  loading?: boolean;
  dynamicValueKey?: string;
}

export type ITableRow =  any; // More additional types | Array<Currency> ...

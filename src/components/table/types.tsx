export interface IColumnProps {
  value?: string;
  label: string;
  hidden?: boolean;
}

export interface ITableProps {
  tableDatas: Array<ITableRow>;
  columns: Array<IColumnProps>;
  loading?: boolean;
}

export type ITableRow =  any; // More additional types | Array<Currency> ...

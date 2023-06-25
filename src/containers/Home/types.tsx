import { CurrencyTypes } from "../../types/enum";

export interface ITableRow {
  code: CurrencyTypes;
  name: string;
  date: string;
  value: number;
}

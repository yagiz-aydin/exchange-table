import { FetchMultiReponse } from "../agent/dto";
import { ECurrency } from "../types/enum";

export interface ContextProps {
  getCurrency: (currency: ECurrency) => void;
  history: IHistoryList;
}

export interface IHistoryList {
  [currency: string]: {
    [timestamp: string]: FetchMultiReponse;
  };
}

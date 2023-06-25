import React, { useContext, createContext } from "react";
import { api } from "../agent";
import { FetchMultiReponse } from "../agent/dto";
import { ECurrency } from "../types/enum";
import { ContextProps, IHistoryList } from "./types";

export const ActionContext = createContext({} as ContextProps);

const ActionProvider = (properties: any) => {
  const currencyList = Object.values(ECurrency);
  const [history, setHistory] = React.useState<IHistoryList>(
    {} as IHistoryList
  );

  const getCurrency = async (currency: ECurrency) => {
    try {
      const toConvertList = currencyList.filter((c) => c !== currency);
      const response = (await api.currency({
        from: currency,
        to: toConvertList,
      })) as FetchMultiReponse;
      saveOnHistory(response, currency);
      return response;
    } catch {
      throw Error("Promise failed");
    }
  };

  const saveOnHistory = (response: FetchMultiReponse, currency: ECurrency) => {
    if (history[currency]) {
      setHistory((prevHistory: IHistoryList) => ({
        ...prevHistory,
        [currency]: {
          [response.updated]: response,
          ...history[currency as ECurrency],
        },
      }));
      return;
    }
    setHistory((prevHistory: IHistoryList) => ({
      ...prevHistory,
      [currency]: { [response.updated]: response },
    }));
  };

  const ActionContextValue = {
    history,
    getCurrency,
  };

  return <ActionContext.Provider value={ActionContextValue} {...properties} />;
};

const useActionContext = () => useContext(ActionContext);

export { ActionProvider, useActionContext };

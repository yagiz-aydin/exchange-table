import React from "react";
import { DefaultLayout } from "../../layouts";
import { Button, DataTable } from "../../components";
import { IColumnProps } from "../../components/table/types";
import { CurrencyNames, CurrencyTypes, ECurrency } from "../../types/enum";
import { ButtonList, SelectedCurrencyText } from "./styled";
import { useActionContext } from "../../context/action";
import { IHistoryList } from "../../context/types";
import { checkNumInterval, dateFormatter } from "../../utils";

const columns: Array<IColumnProps> = [
  {
    label: "Kod",
    value: "code",
  },
  {
    label: "İsmi",
    value: "name",
  },
  {
    label: "Tarih",
    value: "date",
  },
  {
    label: "Değer",
    value: "value",
  },
];

const Home = () => {
  const currencyList = Object.values(ECurrency);

  const [selectedCurrency, setSelectedCurrency] = React.useState<ECurrency>(
    ECurrency.USD
  );

  const { getCurrency, history } = useActionContext();

  React.useEffect(() => {
    getCurrency(selectedCurrency);
  }, [selectedCurrency]);

  const tableDataFormatter = (history: IHistoryList) => {
    if (selectedCurrency && history[selectedCurrency]) {
      const historyDatas = Object.values(history[selectedCurrency]);
      const tableDatas = Object.keys(historyDatas[0]?.results).map((i) => {
        const currentResult = historyDatas[0].results[i as CurrencyTypes];
        const firstResult = historyDatas[historyDatas.length-1]?.results[i as CurrencyTypes];
        const value = firstResult
          ? checkNumInterval(currentResult, firstResult)
          : currentResult;

        console.table(history);
        return {
          code: i,
          name: CurrencyNames[i as CurrencyTypes],
          date: dateFormatter(historyDatas[0].updated),
          value,
        };
      });
      return tableDatas;
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      getCurrency(selectedCurrency);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DefaultLayout>
      <ButtonList>
        {currencyList.map((currency) =>
          selectedCurrency === currency ? (
            <SelectedCurrencyText key={currency}>
              1 {currency}
            </SelectedCurrencyText>
          ) : (
            <Button.Primary
              key={currency}
              text={currency}
              onClick={() => setSelectedCurrency(currency)}
            />
          )
        )}
      </ButtonList>
      <DataTable
        type="currency"
        loading={false}
        tableDatas={tableDataFormatter(history) || []}
        columns={columns}
        dynamicValueKey="value"
      />
    </DefaultLayout>
  );
};

export default Home;

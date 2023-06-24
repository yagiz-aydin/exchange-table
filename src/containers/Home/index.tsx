import React from "react";
import { DefaultLayout } from "../../layouts";
import { Button, DataTable } from "../../components";
import { IColumnProps } from "../../components/table/types";
import { CurrencyNames, CurrencyTypes, ECurrency } from "../../types/enum";
import { ButtonList, SelectedCurrencyText } from "./styled";
import { useActionContext } from "../../context";
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
    const getDatas = async (currency: ECurrency) => {
      await getCurrency(currency);
    };
    getDatas(selectedCurrency);
  }, [selectedCurrency]);


  const tableDataFormatter = (history: IHistoryList) => {
    if (selectedCurrency && history[selectedCurrency]) {
      const historyDatas = Object.values(history[selectedCurrency]);
      const tableDatas = Object.keys(historyDatas[0]?.results).map((i) => {
        const currentResult = historyDatas[0].results[i as CurrencyTypes];
        const previousResult = historyDatas[1]?.results[i as CurrencyTypes];
        const value = previousResult
          ? checkNumInterval(currentResult, previousResult)
          : currentResult;
          
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

  return (
    <DefaultLayout>
      <ButtonList>
        {currencyList.map((currency) =>
          selectedCurrency === currency ? (
            <SelectedCurrencyText key={currency}>1 {currency}</SelectedCurrencyText>
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
        loading={false}
        tableDatas={tableDataFormatter(history) || []}
        columns={columns}
        dynamicValueKey="value"
      />
    </DefaultLayout>
  );
};

export default Home;

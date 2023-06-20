import React from 'react';
import { DefaultLayout } from "../../layouts";
import { Button, DataTable } from '../../components';
import { IColumnProps } from '../../components/table/types';
import { CURRENCY } from '../../types/enum';
import {ButtonList, SelectedCurrencyText} from "./styled";

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

const mockData = [
  {
    code: "try",
    name: "Turkish Lira",
    date: "2023-05-30",
    value: "20,15",
  },
  {
    code: "eur",
    name: "Euro",
    date: "2023-05-30",
    value: "0,93",
  },
  {
    code: "jpy",
    name: "Japanese Yen",
    date: "2023-05-30",
    value: "140",
  },
  {
    code: "gbp",
    name: "Pound Sterling",
    date: "2023-05-30",
    value: "0,81",
  },
  {
    code: "cny",
    name: "Chinese Yuan",
    date: "2023-05-30",
    value: "7,06",
  },
];
const Home = () => {
  const currencyList = Object.values(CURRENCY);

  const [selectedCurrency, setSelectedCurrency] = React.useState<string>(CURRENCY.usd); 

  React.useEffect(() => {
    //Make some request to get selected currency
  }, [selectedCurrency]);


    return (
      <DefaultLayout>
        <ButtonList>
          {currencyList.map((currency) =>
            selectedCurrency === currency ? (
              <SelectedCurrencyText>1 {currency}</SelectedCurrencyText>
            ) : (
              <Button.Primary key={currency} text={currency} onClick={() => setSelectedCurrency(currency)} />
            )
          )}
        </ButtonList>
        <DataTable loading={false} tableDatas={mockData} columns={columns} />
      </DefaultLayout>
    );
}

export default Home;
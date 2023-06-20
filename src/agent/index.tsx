import Axios, { AxiosResponse } from "axios";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const responseBody = (response: AxiosResponse) => response?.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const api = {
  currency: ({currency, to}: any) => requests.get(`/latest/currencies/${currency}/${to}.json`),
};
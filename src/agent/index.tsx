import Axios, { AxiosResponse } from "axios";
import { FetchMultiDTO } from "./dto";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const responseBody = (response: AxiosResponse) => response?.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

// /fetch-multi?api_key=YOUR_API_KEY
export const api = {
  currency: ({ from, to }: FetchMultiDTO) =>
    requests.get(
      `/fetch-multi?api_key=${process.env.REACT_APP_API_KEY}&from=${from}&to=${to}`
    ),
};

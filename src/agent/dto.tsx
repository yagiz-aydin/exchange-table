import { CurrencyTypes, ECurrency } from "../types/enum"

export interface FetchMultiDTO {
    from: ECurrency
    to: Array<ECurrency>
}

export interface FetchMultiReponse {
    base: ECurrency
    ms: number
    results: ICurrencyResults
    updated: string
}

export interface ICurrencyResults{
    EUR: number
    CNY: number
    GBP: number
    JPY: number
    TRY: number
    USD: number
}
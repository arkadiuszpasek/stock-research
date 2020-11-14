import { config } from '../config';

export const BASE_URL = 'https://financialmodelingprep.com/api'
const API_PARAM = `?apikey=${config.stockApiKey}`;

export const createCompanyProfileUrl = (ticker: string) => `${BASE_URL}/v3/profile/${ticker}${API_PARAM}`
export const createCompanyKeyMetricsUrl = (ticker: string) => `${BASE_URL}/v3/key-metrics-ttm/${ticker}${API_PARAM}`

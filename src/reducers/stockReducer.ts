import { ActionType, FetchKeyMetricsAction, FetchProfileAction } from '../actions';

export enum StockDataType { PROFILE, KEY_METRICS }

export interface StockProfile {
  "symbol" : string;
  "price" : number;
  "mktCap" : number;
  "range" : string;
  "companyName" : string;
  "exchangeShortName" : string;
  "website" : string;
  "description" : string;
  "fullTimeEmployees" : string;
  "state" : string;
  "dcfDiff" : number;
  "dcf" : number;
  "image" : string;
  "ipoDate" : string;
}

export interface StockKeyMetrics {
  "revenuePerShareTTM" : number,
  "netIncomePerShareTTM" : number,
  "operatingCashFlowPerShareTTM" : number,
  "freeCashFlowPerShareTTM" : number,
  "cashPerShareTTM" : number,
  "bookValuePerShareTTM" : number,
  "tangibleBookValuePerShareTTM" : number,
  "shareholdersEquityPerShareTTM" : number,
  "marketCapTTM" : number,
  "peRatioTTM" : number,
  "priceToSalesRatioTTM" : number,
  "pfcfRatioTTM" : number,
  "pbRatioTTM" : number,
  "debtToAssetsTTM" : number,
  "dividendYieldTTM" : number,
  "dividendYieldPercentageTTM" : number,
  "payoutRatioTTM" : number,
}

export interface StockData {
  metrics?: StockKeyMetrics;
  profile?: StockProfile;
};

const INITIAL_STATE: StockData = {
  metrics: undefined,
  profile: undefined
}

export default (state = INITIAL_STATE, action: FetchKeyMetricsAction | FetchProfileAction): StockData => {
  switch (action.type) {
    case ActionType.FETCH_KEY_METRICS:
      return { ...state, metrics: action.payload };
    case ActionType.FETCH_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

import { ActionType, FetchKeyMetricsAction, FetchProfileAction, FetchRatingAction } from '../actions';

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

export interface StockRating {
  "date" : string;
  "rating" : string;
  "ratingScore" : number;
  "ratingRecommendation" : string;
  "ratingDetailsDCFScore" : number;
  "ratingDetailsDCFRecommendation" : string;
  "ratingDetailsROEScore" : number;
  "ratingDetailsROERecommendation" : string;
  "ratingDetailsROAScore" : number;
  "ratingDetailsROARecommendation" : string;
  "ratingDetailsDEScore" : number;
  "ratingDetailsDERecommendation" : string;
  "ratingDetailsPEScore" : number;
  "ratingDetailsPERecommendation" : string;
  "ratingDetailsPBScore" : number;
  "ratingDetailsPBRecommendation" : string;
}

export interface StockData {
  metrics?: StockKeyMetrics;
  profile?: StockProfile;
  rating?: StockRating;
};

const INITIAL_STATE: StockData = {
  metrics: undefined,
  profile: undefined,
  rating: undefined,
}

export default (state = INITIAL_STATE, action: FetchKeyMetricsAction | FetchProfileAction | FetchRatingAction): StockData => {
  switch (action.type) {
    case ActionType.FETCH_KEY_METRICS:
      return { ...state, metrics: action.payload };
    case ActionType.FETCH_PROFILE:
      return { ...state, profile: action.payload };
    case ActionType.FETCH_RATING:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

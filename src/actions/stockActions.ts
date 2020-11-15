import { StockKeyMetrics, StockProfile, StockRating } from '../reducers/stockReducer';
import { createCompanyKeyMetricsUrl, createCompanyProfileUrl, createCompanyRatingUrl } from '../stockApiWrapper/fetches';
import { ActionType } from './';

export const fetchKeyMetrics = (ticker: string) => async (dispatch: any) => {
  const response = await fetch(createCompanyKeyMetricsUrl(ticker));
  const [json] = await response.json();
  console.log(json);

  dispatch({
    type: ActionType.FETCH_KEY_METRICS,
    payload: json
  });
};

export const fetchProfile = (ticker: string) => async (dispatch: any) => {
  const response = await fetch(createCompanyProfileUrl(ticker));
  const [json] = await response.json();
  console.log(json);

  dispatch({
    type: ActionType.FETCH_PROFILE,
    payload: json
  })
};

export const fetchRating = (ticker: string) => async (dispatch: any) => {
  const response = await fetch(createCompanyRatingUrl(ticker));
  const [json] = await response.json();
  console.log(json);

  dispatch({
    type: ActionType.FETCH_RATING,
    payload: json
  })
};

export interface FetchKeyMetricsAction {
  type: ActionType.FETCH_KEY_METRICS;
  payload: StockKeyMetrics;
};

export interface FetchProfileAction {
  type: ActionType.FETCH_PROFILE;
  payload: StockProfile;
};

export interface FetchRatingAction {
  type: ActionType.FETCH_RATING;
  payload: StockRating;
};

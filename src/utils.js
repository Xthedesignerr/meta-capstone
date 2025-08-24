// src/utils.js
import { fetchAPI } from './api';

export const initializeTimes = () => {
  // For testing purposes, return the fetchAPI for today
  return fetchAPI(new Date());
};

export const updateTimes = (dispatch, date) => {
  const availableTimes = fetchAPI(date);
  dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
};


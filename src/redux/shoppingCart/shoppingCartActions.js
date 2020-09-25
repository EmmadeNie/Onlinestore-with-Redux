import { ADD_ITEM } from "./shoppingCartTypes";

import * as actionTypes from "./shoppingCartTypes";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const incrementAmount = (item) => {
  return {
    type: actionTypes.INCREMENT_AMOUNT,
    payload: item,
  };
};

export const decrementAmount = (item) => {
  return {
    type: "DECREMENT_AMOUNT",
    payload: item,
  };
};

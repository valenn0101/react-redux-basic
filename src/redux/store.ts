import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  starters: [],
  substitutes: [],
};

const reducerManager = (state = initialState, action) => {
  return state;
};

export default configureStore(reducerManager);

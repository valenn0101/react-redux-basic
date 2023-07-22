import { configureStore } from "@reduxjs/toolkit";

import playersList from "./players.json";

type Player = {
  id: number;
  name: string;
  photo: string;
};

const initialState = {
  players: playersList as Player[],
  starters: [],
  substitutes: [],
};

const reducerManager = (state = initialState, action: any) => {
  return state;
};

export default configureStore({
  reducer: reducerManager,
});

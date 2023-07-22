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
  if (action.type === "ADD_STARTER") {
    return {
      ...state,
      starters: state.starters.concat(action.payload),
      players: state.players.filter(player => player.id !== action.payload.id),
    };
  }
  return state;
};

export default configureStore({
  reducer: reducerManager,
});

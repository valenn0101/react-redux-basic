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
  limitStarterPlayers: 11,
};

const reducerManager = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_STARTER":
      if (state.starters.length < state.limitStarterPlayers) {
        return {
          ...state,
          starters: [...state.starters, action.payload],
          players: state.players.filter(
            player => player.id !== action.payload.id
          ),
        };
      }
      return state;

    case "ADD_SUBTITUTE":
      return {
        ...state,
        substitutes: [...state.substitutes, action.payload],
        players: state.players.filter(
          player => player.id !== action.payload.id
        ),
      };
    case "REMOVE_STARTER":
      return {
        ...state,
        starters: state.starters.filter(
          player => player.id !== action.payload.id
        ),
        players: [...state.players, action.payload],
      };
    case "REMOVE_SUBTITUTE":
      return {
        ...state,
        substitutes: state.substitutes.filter(
          player => player.id !== action.payload.id
        ),
        players: [...state.players, action.payload],
      };
    default:
      return state;
  }
};

export default configureStore({
  reducer: reducerManager,
});

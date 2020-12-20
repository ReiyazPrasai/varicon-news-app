import { GET_WEATHER, FAILURE, Action } from "../types";

interface NewsState {
  payload: object;
  loading: boolean;
  error: string | object | null;
}

const initialState: NewsState = {
  payload: [],
  loading: true,
  error: "",
};

export const weatherReducer = (
  state = initialState,
  action: Action
): NewsState => {
  const { data } = action;
  console.log(action);
  switch (action.type) {
    case GET_WEATHER:
      return data;
    case FAILURE:
      return data;
    default:
      return state;
  }
};

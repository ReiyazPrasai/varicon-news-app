import { GET_NEWS, FAILURE, Action } from "../types";

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

export const newsReducer = (
  state = initialState,
  action: Action
): NewsState => {
  const { data } = action;
  switch (action.type) {
    case GET_NEWS:
      return data;
    case FAILURE:
      return data;
    default:
      return state;
  }
};

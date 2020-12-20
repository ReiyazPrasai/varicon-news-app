import { ThunkAction } from "redux-thunk";

import { Api } from "./axiosUtil";
import { FAILURE, Action } from "../store/types";
import { RootState } from "../store";

export function fetch(api: string, params: any = {}) {
  return Api().get(api, params);
}

export const get = (
  api: string,
  type: any
): ThunkAction<void, RootState, null, Action> => {
  return (dispatch) => {
    fetch(api)
      .then((response) => {    
        if (response.statusText === "OK" && response.status === 200) {
          dispatch({
            type: type,
            data: {
              payload: response.data,
              loading: false,
              error: null,
            },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: FAILURE,
          data: {
            payload: [],
            loading: false,
            error: err,
          },
        });
      });
  };
};

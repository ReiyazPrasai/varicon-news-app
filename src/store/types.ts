export const FAILURE = "FAILURE";

export interface SuccessAction {
  type: string;
  data: {
    payload: any;
    loading: boolean;
    error: null;
  };
}

export interface FailureAction {
  type: string;
  data: {
    payload: [];
    loading: boolean;
    error: any;
  };
}

export type Action = SuccessAction | FailureAction;

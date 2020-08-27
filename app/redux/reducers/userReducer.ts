import { UserAction, UserReducerState } from "../types";

const initialState: UserReducerState = {
  name: "",
  logedIn: false,
};

export enum ActionTypes {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return { ...state, logedIn: true };
    case ActionTypes.LOG_OUT:
      return { ...state, logedIn: false };
    default:
      return state;
  }
};

export const actionLogIn = () => ({
  type: ActionTypes.LOG_IN,
});

export const actionLogOut = () => ({
  type: ActionTypes.LOG_OUT,
});

export default userReducer;

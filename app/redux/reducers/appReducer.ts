import { AppAction, AppReducerState } from "../types";

const initialState: AppReducerState = {
  route: "",
};

export enum ActionTypes {
  CHANGE_ROUTE = "CHANGE_ROUTE",
}

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
};

export const changeRoute = (route: string) => ({
  type: ActionTypes.CHANGE_ROUTE,
  payload: route,
});

export default appReducer;

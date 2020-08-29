import { AppAction, AppReducerState } from "../types";
import Loader from "../../screens/main/loader";

const initialState: AppReducerState = {
  route: "",
  loader: [],
};

export enum ActionTypes {
  CHANGE_ROUTE = "CHANGE_ROUTE",
  ADD_LOADER = "ADD_LOADER",
  REMOVE_LOADER = "REMOVE_LOADER",
  CLEAR_LOADER = "CLEAR_LOADER",
}

const removeLoaderFormArray = (
  loaderItem: string,
  loaderArray: string[]
): string[] => {
  return loaderArray.filter((loader) => loader !== loaderItem);
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ROUTE:
      return { ...state, route: action.payload };
    case ActionTypes.ADD_LOADER:
      return { ...state, loader: [...state.loader, action.payload] };
    case ActionTypes.REMOVE_LOADER:
      return {
        ...state,
        loader: removeLoaderFormArray(action.payload, state.loader),
      };
    case ActionTypes.CLEAR_LOADER:
      return { ...state, loader: [] };
    default:
      return state;
  }
};

export const changeRoute = (route: string) => ({
  type: ActionTypes.CHANGE_ROUTE,
  payload: route,
});

export const addLoader = (loader: string) => ({
  type: ActionTypes.ADD_LOADER,
  payload: loader,
});

export const removeLoader = (loader: string) => ({
  type: ActionTypes.REMOVE_LOADER,
  payload: loader,
});

export const cleanLoader = (loader: string) => ({
  type: ActionTypes.CLEAR_LOADER,
});

export default appReducer;

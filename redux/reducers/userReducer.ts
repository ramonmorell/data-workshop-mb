import { UserAction, UserReducerState } from "../types";

const initialState: UserReducerState = {
  name: "",
  logedIn: false,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, logedIn: true };
    default:
      return state;
  }
};

export default userReducer;

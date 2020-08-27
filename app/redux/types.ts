export interface ReduxState {
  user: UserReducerState;
}

export interface UserReducerState {
  logedIn: boolean;
  name: string;
}

export interface Action {
  type: string;
}

export interface UserAction extends Action {
  payload: any;
}

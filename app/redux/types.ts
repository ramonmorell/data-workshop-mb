export interface ReduxState {
  app: AppReducerState;
  user: UserReducerState;
}

export interface AppReducerState {
  route: string;
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

export interface AppAction extends Action {
  payload: any;
}

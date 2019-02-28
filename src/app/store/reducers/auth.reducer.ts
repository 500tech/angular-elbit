import { Action } from "@ngrx/store";

export interface AuthState {
  user: string;
}

export const initialState: AuthState = {
  user: "adam"
};

export function authReducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    default:
      return state;
  }
}

import { login, logout } from "../actions/authActions";

interface AuthState {
  loggedIn: boolean;
  user: string | null | undefined;
}

const initialState: AuthState = {
  loggedIn: false,
  user: null,
};
type AuthAction = ReturnType<typeof login | typeof logout>;
const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        user: action.user
      };
    case "LOGIN_FAILED":
      return {
        loggedIn: false,
        user: null,
      };
    case "LOGOUT":
      return {
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
export default authReducer;

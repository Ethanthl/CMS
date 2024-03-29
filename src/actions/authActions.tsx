import { createSession, destroySession } from "../helpers/sessions";

interface User {
  user: string;
  password: string;
}

interface LoginAction {
  type: "LOGIN";
  user: User;
}

interface LoginFailedAction {
  type: "LOGIN_FAILED";
}

const checkCredentials = (credentials: { user: string; password: string }) => {
  const storedUserData = localStorage.getItem("userData");
  if (storedUserData && credentials.user && credentials.password) {
    const user = JSON.parse(storedUserData).find(
      (userObj: { user: string; password: string }) =>
        userObj.user === credentials.user &&
        userObj.password === credentials.password
    );
    return (
      credentials.user === user.user && credentials.password === user.password
    );
  }
  return false;
};
export const login = (credentials: { user: string; password: string }) => {
  if (checkCredentials(credentials)) {
    //Since this is only client side I've set the token to always be the same
    //Would normally use JWT or response from server
    createSession({ token: "token", user: credentials.user });
    return { type: "LOGIN", user: credentials.user || null };
  } else {
    return { type: "LOGIN_FAILED" };
  }
};
export type AuthAction = LoginAction | LoginFailedAction;

export const logout = () => {
  destroySession();
  return {
    type: "LOGOUT" as const,
  };
};

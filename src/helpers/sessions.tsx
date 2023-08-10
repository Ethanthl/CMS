const _localStorageKeys = {
  sessionUser: "user",
  sessionToken: "token",
};

interface SessionData {
  token: string;
  user: string;
}

const createSession = ({ token, user }: SessionData): void => {
  localStorage.setItem(_localStorageKeys.sessionToken, token); // Assuming 'sessionToken' is the key for token
  localStorage.setItem(_localStorageKeys.sessionUser, user); // Assuming 'sessionUser' is the key for user
};

const destroySession = () => {
  localStorage.removeItem(_localStorageKeys.sessionToken);
  localStorage.removeItem(_localStorageKeys.sessionUser);
};

const isAuthenticated = () => {
  return localStorage.getItem(_localStorageKeys.sessionToken) !== null;
};

const getSessionData = () => {
  return {
    user: localStorage.getItem(_localStorageKeys.sessionUser),
    token: localStorage.getItem(_localStorageKeys.sessionToken),
  };
};

export { createSession, destroySession, isAuthenticated, getSessionData };

// PLantilla: https://codesandbox.io/p/sandbox/react-context-provider-example-x4683

import React, { PropsWithChildren } from "react";

interface ContextModel {
  username: String;
  setUsername: (username: String) => void;
}

export const UsernameContext = React.createContext<ContextModel>(null);

export const UsernameProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsername] = React.useState<ContextModel>();
  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const MyComponent: React.FC = () => {
  const { username, setUsername } = React.useContext(UsernameContext);
  return (
    <>
      <div>{username}</div>
      <button onClick={() => setUsername("new username")}>Set Username</button>
    </>
  );
};

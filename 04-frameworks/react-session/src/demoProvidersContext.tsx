// PLantilla: https://codesandbox.io/p/sandbox/react-context-provider-example-x4683

import React, { PropsWithChildren } from "react";

interface ContextModel {
  username: string;
  setUsername: (username: string) => void;
}

const initialUsernameContext = {
	username: "",
	setUsername: () => {}
}

export const UsernameContext = React.createContext<ContextModel>(initialUsernameContext);

export const UsernameProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsername] = React.useState<string>("");
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

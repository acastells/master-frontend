import React, { PropsWithChildren } from "react";

interface ContextModel {}

const Context = React.createContext<ContextModel>(null);

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = React.useState<ContextModel>(null);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const MyComponent: React.FC = () => {
  const {} = React.useContext(Context);
  return <div>{}</div>;
};
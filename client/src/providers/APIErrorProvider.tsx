import { useState, useCallback, createContext } from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

type ContextProps = {
  error: string;
  addError: (message: string) => void;
  removeError: () => void;
};

export const APIErrorContext = createContext<ContextProps>({
  error: "",
  addError: () => {},
  removeError: () => {},
});

export function APIErrorProvider({ children }: Props) {
  const [error, setError] = useState<string>("");

  const removeError = () => setError("");

  const addError = (message: string) => setError(message);

  const contextValue = {
    error,
    addError: useCallback((message) => addError(message), []),
    removeError: useCallback(() => removeError(), []),
  };

  return (
    <APIErrorContext.Provider value={contextValue}>
      {children}
    </APIErrorContext.Provider>
  );
}

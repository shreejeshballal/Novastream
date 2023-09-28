import { createContext, useState } from "react";

export const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [authModal, setAuthModal] = useState(false);

  const openAuthModal = () => {
    setAuthModal(true);
  };

  const closeAuthModal = () => {
    setAuthModal(false);
  };
  return (
    <AuthModalContext.Provider
      value={{ authModal, openAuthModal, closeAuthModal }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

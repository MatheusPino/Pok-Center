/* eslint-disable react-refresh/only-export-components */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// Criando o contexto
const ModalContext = React.createContext();

// Provedor do contexto
export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired
};

// Hook para acessar o contexto
export const useModal = () => {
  return useContext(ModalContext);
};

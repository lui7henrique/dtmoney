import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    // setar a informação que o modal foi aberto
    setisNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    // setar a informação que o modal foi fechado
    setisNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

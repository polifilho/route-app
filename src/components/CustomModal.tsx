import React from "react";
import { Modal, Typography, Box } from "@mui/material";

import { ModalProps } from './../types/';
import SubRoutes from './SubRoute'

export const CustomModal = ({ subRoutes, fullRouteName, isModalVisible, toggleModal }: ModalProps) => {
  return (
    <Modal open={isModalVisible} onClose={() => toggleModal(!isModalVisible)}>
      <Box sx={{ p: 3, backgroundColor: "white", borderRadius: 2, maxWidth: 400, margin: "auto", mt: 10 }}>
        <h2>Detalhes da Rota</h2>
        <h3>{fullRouteName}</h3>

        <SubRoutes subRoutes={subRoutes} />
      </Box>
    </Modal>
  )
}

export default CustomModal;

import React from "react";
import { Modal, Typography, Box } from "@mui/material";

import { ModalProps } from './../types/';
import SubRoutes from './SubRoute'

export const CustomModal: React.FC<ModalProps> = ({ subRoutes, fullRouteName, isModalVisible, toggleModal }) => {
  return (
    <Modal open={isModalVisible} onClose={toggleModal}>
      <Box sx={{ p: 3, backgroundColor: "white", borderRadius: 2, maxWidth: 400, margin: "auto", mt: 10 }}>
        <Typography variant="h6">Detalhes da Rota</Typography>
        <Typography variant="body1">{fullRouteName}</Typography>
        
        <SubRoutes subRoutes={subRoutes} />
      </Box>
    </Modal>
  )
}

export default CustomModal;

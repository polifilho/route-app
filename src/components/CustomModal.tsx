import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { ModalProps } from './../types/';
import SubRoutes from './SubRoute'

export const CustomModal = ({ subRoutes, fullRouteName, isModalVisible, toggleModal }: ModalProps) => {
  return (
    <Modal open={isModalVisible} onClose={() => toggleModal(!isModalVisible)}>
      <Box sx={{ p: 3, backgroundColor: "white", borderRadius: 2, maxWidth: 400, margin: "auto", mt: 10 }}>
        <h2>Route Details</h2>
        <h3>{fullRouteName}</h3>

        <IconButton
          aria-label="close-modal"
          onClick={() => toggleModal(false)}
          style={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
        </IconButton>
        <SubRoutes subRoutes={subRoutes} />
      </Box>
    </Modal>
  )
}

export default CustomModal;

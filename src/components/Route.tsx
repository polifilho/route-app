import React, { useState } from "react";
import { Tooltip, IconButton, Typography, Box, Grid2 } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import RouteIcon from '@mui/icons-material/Route';

import CustomModal from './CustomModal'
import { OrderItem } from './../types';

interface RouteProps {
  orderItem: OrderItem;
}

const RouteComponent: React.FC<RouteProps> = ({ orderItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const formattedDate = new Date(orderItem.departAt).toLocaleDateString("en-GB");
  const formattedTime = new Date(orderItem.departAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Grid2 size={6} sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2, width: "fit-content" }}>
      <Box gap={1} display="flex" alignItems="center">
        <PlaceIcon fontSize="small" />
        <Tooltip title={orderItem.fullRouteName} arrow>
          <Typography variant="body1" fontWeight="bold">
            {orderItem.route}
          </Typography>
        </Tooltip>
        <IconButton onClick={toggleModal}>
          <RouteIcon />
        </IconButton>

        <CustomModal
          subRoutes={orderItem.subRoutes}
          fullRouteName={orderItem.fullRouteName}
          toggleModal={toggleModal}
          isModalVisible={isModalVisible}
        />

      </Box>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">{formattedDate}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
          <DepartureBoardIcon fontSize="small" />
          <Typography variant="body2">{formattedTime}</Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default RouteComponent;

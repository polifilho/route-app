import React, { useState, useMemo, useCallback } from "react";
import { IconButton, Typography, Box, Grid2 } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import RouteIcon from '@mui/icons-material/Route';

import CustomModal from './CustomModal';
import CustomTooltip from './CustomTooltip';
import { OrderItem } from './../types';
import SelectTimeZone from './SelectTimeZone'

interface RouteProps {
  orderItem: OrderItem
}

const RouteComponent: React.FC<RouteProps> = ({ orderItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timezone, setTimezone] = useState<"UTC" | "CET">("UTC");
  
  // Memorize functions
  const toggleModal = useCallback(() => setIsModalVisible(!isModalVisible), [isModalVisible]);
  const handleTimezoneChange = useCallback((tz: "UTC" | "CET") => setTimezone(tz), []);

  // Handle Date and Time with useMemo
  const formattedDate = useMemo(() => 
    new Date(orderItem.departAt).toLocaleDateString("en-GB"), 
    [orderItem.departAt]
  );
  const formattedTime = useMemo(() => 
    new Date(orderItem.departAt + "Z").toLocaleTimeString("en-GB", {
      timeZone: timezone === "CET" ? "Europe/Berlin" : "UTC",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    [orderItem.departAt, timezone]
  );

  return (
    <Grid2 sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2, width: "fit-content" }}>
      <Box gap={1} display="flex" alignItems="center">
        <PlaceIcon fontSize="small" />
        <CustomTooltip title={orderItem.fullRouteName} arrow>
          <Typography variant="body1" fontWeight="bold">
            {orderItem.route}
          </Typography>
        </CustomTooltip>
        {orderItem.interconnection !== '' && 
          <IconButton id="open-modal" onClick={toggleModal}>
            <RouteIcon />
          </IconButton>
        }
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

      <CustomModal
        subRoutes={orderItem.subRoutes}
        fullRouteName={orderItem.fullRouteName}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />

      <SelectTimeZone
        timezone={timezone}
        setTimezone={handleTimezoneChange}
      />
    </Grid2>
  );
};

export default RouteComponent;

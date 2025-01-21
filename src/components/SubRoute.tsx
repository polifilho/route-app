import React from "react";
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { SubRoute } from '../types';

interface SubRouteProps {
    subRoutes: SubRoute[];
}

export const SubRoutes: React.FC<SubRouteProps> = ({ subRoutes }) => {
  return (
    <>
      <Typography sx={{ mt: 3, mb: 0 }} variant="body2">Sub-rotas:</Typography>
      <List>
        {subRoutes.map((subRoute, index) => (
          <ListItem key={`${subRoute.rideId}-${index}`}>
            <ListItemText
              primary={`${subRoute.fullRouteName} (${subRoute.stopFromCityName} ➝ ${subRoute.stopToCityName})`}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default SubRoutes;

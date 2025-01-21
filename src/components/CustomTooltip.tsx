import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))
(({ theme }) => (
  {
    [`& .${tooltipClasses.tooltip}`]: {
      color: '#fff',
      boxShadow: theme.shadows[1],
      fontSize: 13,
      top: -15
    },
  }
));

export default CustomTooltip;

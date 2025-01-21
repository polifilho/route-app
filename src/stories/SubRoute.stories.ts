import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SubRoutes } from '../components/SubRoute';
import '../App.css'

const meta = {
  title: 'Flix/SubRoute',
  component: SubRoutes,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SubRoutes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneSubRoute: Story = {
  args: {
    subRoutes: [
        {
            "route": "BL - AH",
            "concession": "LFLX35",
            "lineColor": "300fd7",
            "type": "adult",
            "fullRouteName": "Berlin Central Station (FlixTrain) - Hamburg Central Station (FlixTrain)",
            "stopFromCityName": "Berlin Central Station",
            "stopToCityName": "Hamburg Central Station",
            "departure": "2024-03-30T11:58+01:00",
            "arrival": "2024-03-30T14:11+01:00",
            "rideId": "228"
          }
    ]
  },
};

export const TwoSubRoutes: Story = {
    args: {
        subRoutes: [
            {
                "route": "BL - AH",
                "concession": "LFLX35",
                "lineColor": "300fd7",
                "type": "adult",
                "fullRouteName": "Berlin Central Station (FlixTrain) - Hamburg Central Station (FlixTrain)",
                "stopFromCityName": "Berlin Central Station",
                "stopToCityName": "Hamburg Central Station",
                "departure": "2024-03-30T11:58+01:00",
                "arrival": "2024-03-30T14:11+01:00",
                "rideId": "228"
              },
              {
                "route": "AH - HB.",
                "concession": "LFLX20",
                "lineColor": "ffff00",
                "type": "adult",
                "fullRouteName": "Hamburg Central Station (FlixTrain) - Bremen Central Station (FlixTrain)",
                "stopFromCityName": "Hamburg Central Station",
                "stopToCityName": "Bremen Central Station",
                "departure": "2024-03-30T14:48+01:00",
                "arrival": "2024-03-30T15:47+01:00",
                "rideId": "255"
              }
        ]
    },
  };
  
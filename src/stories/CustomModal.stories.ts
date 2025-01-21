import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CustomModal } from '../components/CustomModal';
import '../App.css'

const meta = {
  title: 'Flix/CustomModal',
  component: CustomModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomModal>;

const subRoutes = [
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subRoutes,
    fullRouteName: 'Berlin to Hamburgo',
    isModalVisible: true,
    toggleModal: fn(),
  },
};

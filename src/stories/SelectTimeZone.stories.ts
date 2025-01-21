import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectTimeZone } from '../components/SelectTimeZone';
import '../App.css'

const meta = {
  title: 'Flix/SelectTimeZone',
  component: SelectTimeZone,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectTimeZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UTC: Story = {
  args: {
    timezone: "UTC",
    setTimezone: fn(),
  },
};

export const CET: Story = {
    args: {
      timezone: "CET",
      setTimezone: fn(),
    },
  };
  
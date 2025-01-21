import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RouteComponent from '../../components/Route';
import { OrderItem } from '../../types';
import '@testing-library/jest-dom';

// Mock dependences of components
jest.mock('../../components/CustomModal', () => ({
  __esModule: true,
  default: jest.fn(({ isModalVisible }) =>
    isModalVisible ? <div>Modal Opened</div> : null
  ),
}));

jest.mock('../../components/CustomTooltip', () => ({
  __esModule: true,
  default: jest.fn(({ title, children }) => (
    <div data-testid="tooltip">
      {children}
      <span>{title}</span>
    </div>
  )),
}));

jest.mock('../../components/SelectTimeZone', () => ({
  __esModule: true,
  default: jest.fn(({ timezone, setTimezone }) => (
    <select
      data-testid="timezone-select"
      value={timezone}
      onChange={(e) => setTimezone(e.target.value)}
    >
      <option value="UTC">UTC</option>
      <option value="CET">CET</option>
    </select>
  )),
}));

describe('Route Component', () => {
  const orderItem: OrderItem = {
    route: 'BL - AH',
    fullRouteName:
      'Berlin Central Station (FlixTrain) - Hamburg Central Station (FlixTrain)',
    departAt: '2024-03-30T11:58:00',
    interconnection: "INTERCONNECTION",
    subRoutes: [
      {
        route: 'BL - AH',
        concession: 'LFLX35',
        lineColor: '300fd7',
        type: 'adult',
        fullRouteName:
          'Berlin Central Station (FlixTrain) - Hamburg Central Station (FlixTrain)',
        stopFromCityName: 'Berlin Central Station',
        stopToCityName: 'Hamburg Central Station',
        departure: '2024-03-30T11:58+01:00',
        arrival: '2024-03-30T14:11+01:00',
        rideId: '228',
      },
    ],
  };

  it('Should render the route information correctly', () => {
    render(<RouteComponent orderItem={orderItem} />);

    expect(screen.getByText(orderItem.route)).toBeInTheDocument();
    expect(screen.getByText(orderItem.fullRouteName)).toBeInTheDocument();

    expect(screen.getByText('30/03/2024')).toBeInTheDocument();
  });

  it('Should open the modal when clicking the route icon button', () => {
    render(<RouteComponent orderItem={orderItem} />);

    expect(screen.queryByText('Modal Opened')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Modal Opened')).toBeInTheDocument();
  });

  it('Should change timezone when selecting a new value', () => {
    render(<RouteComponent orderItem={orderItem} />);

    const timezoneSelect = screen.getByTestId('timezone-select');

    expect(timezoneSelect).toHaveValue('UTC');

    fireEvent.change(timezoneSelect, { target: { value: 'CET' } });

    expect(timezoneSelect).toHaveValue('CET');
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomModal } from '../../components/CustomModal';
import { SubRoute } from '../../types';
import '@testing-library/jest-dom';

// Mock SubRoutes
jest.mock('../../components/SubRoute', () => ({
  __esModule: true,
  default: jest.fn(() => <div>SubRoutes Component</div>),
}));

describe('CustomModal Component', () => {
  const toggleModal = jest.fn();
  const subRoutes: SubRoute[] = [
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
  ];

  it('should render the modal with correct content when isModalVisible is true', () => {
    const fullRouteName = 'Test Route';

    render(
      <CustomModal
        subRoutes={subRoutes}
        fullRouteName={fullRouteName}
        isModalVisible={true}
        toggleModal={toggleModal}
      />
    );

    expect(screen.getByText(/Detalhes da Rota/i)).toBeInTheDocument();
    expect(screen.getByText(fullRouteName)).toBeInTheDocument();
    expect(screen.getByText('SubRoutes Component')).toBeInTheDocument();
  });

  it('should call toggleModal when modal is closed', () => {
    const fullRouteName = 'Test Route';

    render(
      <CustomModal
        subRoutes={subRoutes}
        fullRouteName={fullRouteName}
        isModalVisible={true}
        toggleModal={toggleModal}
      />
    );

    expect(screen.getByText('Detalhes da Rota')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(toggleModal).toHaveBeenCalledWith(false);
  });

  it('should not render modal when isModalVisible is false', () => {
    const fullRouteName = 'Test Route';

    render(
      <CustomModal
        subRoutes={subRoutes}
        fullRouteName={fullRouteName}
        isModalVisible={false}
        toggleModal={toggleModal}
      />
    );

    expect(screen.queryByText('Detalhes da Rota')).not.toBeInTheDocument();
  });
});

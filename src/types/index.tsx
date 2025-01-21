export interface SubRoute {
    route: string;
    concession: string;
    lineColor: string;
    type: string;
    fullRouteName: string;
    stopFromCityName: string;
    stopToCityName: string;
    departure: string;
    arrival: string;
    rideId: string;
}

export interface OrderItem {
    fullRouteName: string;
    departAt: string;
    route: string;
    interconnection: string;
    subRoutes: SubRoute[];
  }
  
export interface ModalProps {
    subRoutes: SubRoute[];
    fullRouteName: string;
    isModalVisible: boolean;
    toggleModal: () => void;
  }
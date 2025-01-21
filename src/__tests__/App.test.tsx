import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { OrderItem } from "../types";

// Mock Component Route
jest.mock("../components/Route", () => () => <div data-testid="route-component">Mocked Route</div>);

describe("App Component", () => {
  // Mock orderItem
  const mockOrderItem: OrderItem = {
    fullRouteName: "Berlin Central Station - Bremen Central Station",
    departAt: "2024-03-30T11:58:00Z",
    route: "BL - HB",
    interconnection: "INTERCONNECTION",
    subRoutes: [
      {
        route: "BL - AH",
        concession: "LFLX35",
        lineColor: "300fd7",
        type: "adult",
        fullRouteName: "Berlin - Hamburg",
        stopFromCityName: "Berlin",
        stopToCityName: "Hamburg",
        departure: "2024-03-30T11:58:00Z",
        arrival: "2024-03-30T14:11:00Z",
        rideId: "228",
      },
    ],
  };

  test("Sould render title", () => {
    render(<App orderItem={mockOrderItem} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Flix - Check now your route");
  });

  test("Should render Route component using 'orderItem' as props", () => {
    render(<App orderItem={mockOrderItem} />);

    expect(screen.getByTestId("route-component")).toBeInTheDocument();
  });
});

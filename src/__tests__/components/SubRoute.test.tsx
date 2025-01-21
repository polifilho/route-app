import React from "react";
import { render, screen } from "@testing-library/react";
import SubRoutes from "../../components/SubRoute";
import { SubRoute } from "../../types";

describe("SubRoutes Component", () => {
  // Mock Props  
  const mockSubRoutes: SubRoute[] = [
    {
      rideId: "1",
      route: "BL - AH",
      concession: "FlixTrain",
      lineColor: "#FF5733",
      type: "Train",
      fullRouteName: "Berlin Central Station (FlixTrain) - Hamburg Central Station (FlixTrain)",
      stopFromCityName: "Berlin Central Station",
      stopToCityName: "Hamburg Central Station",
      departure: "2024-03-30T11:58:00Z",
      arrival: "2024-03-30T14:11:00Z",
    },
  ];

  test("Should render the title 'Sub-rotas:'", () => {
    render(<SubRoutes subRoutes={mockSubRoutes} />);
    expect(screen.getByText("Sub-rotas:")).toBeInTheDocument();
  });

  test("Should render the sub-route details", () => {
    render(<SubRoutes subRoutes={mockSubRoutes} />);

    expect(screen.getByText("BL - AH:")).toBeInTheDocument();
    expect(
      screen.getByText("Berlin Central Station (FlixTrain) - Hamburg Central Station (FlixTrain)")
    ).toBeInTheDocument();
  });

  test("Should render departure and arrival times correctly", () => {
    render(<SubRoutes subRoutes={mockSubRoutes} />);

    expect(screen.getByText(/Departure:/i)).toBeInTheDocument();
    expect(
      screen.getByText("(Berlin Central Station ➝", { exact: false })
    ).toBeInTheDocument();

    expect(screen.getByText(/Arrival:/i)).toBeInTheDocument();
    expect(
      screen.getByText("(Hamburg Central Station ➝", { exact: false })
    ).toBeInTheDocument();
  });

  test("Should render multiple sub-routes correctly", () => {
    const multipleRoutes: SubRoute[] = [
      ...mockSubRoutes,
      {
        rideId: "2",
        route: "AH - HB",
        concession: "FlixTrain",
        lineColor: "#33FF57",
        type: "Train",
        fullRouteName: "Hamburg Central Station (FlixTrain) - Bremen Central Station (FlixTrain)",
        stopFromCityName: "Hamburg Central Station",
        stopToCityName: "Bremen Central Station",
        departure: "2024-03-30T14:48:00Z",
        arrival: "2024-03-30T15:47:00Z",
      },
    ];

    render(<SubRoutes subRoutes={multipleRoutes} />);

    expect(screen.getByText("BL - AH:")).toBeInTheDocument();
    expect(screen.getByText("AH - HB:")).toBeInTheDocument();
  });
});

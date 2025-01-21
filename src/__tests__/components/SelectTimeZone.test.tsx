import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectTimeZone from "../../components/SelectTimeZone";

describe("SelectTimeZone Component", () => {
  it("Should render correctly with initial timezone", () => {
    const mockSetTimezone = jest.fn();
    
    render(<SelectTimeZone timezone="UTC" setTimezone={mockSetTimezone} />);
    
    expect(screen.getByText("Original time zone")).toBeInTheDocument();
    expect(screen.getByText("CET (Europa Central)")).toBeInTheDocument();
    
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("UTC");
  });

  it("Should call setTimezone with the correct value when an option is selected", () => {
    const mockSetTimezone = jest.fn();
    
    render(<SelectTimeZone timezone="UTC" setTimezone={mockSetTimezone} />);
    
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "CET" } });
    
    expect(mockSetTimezone).toHaveBeenCalledWith("CET");
  });

  it("Should display the correct value for the select when the timezone is 'CET'", () => {
    const mockSetTimezone = jest.fn();
    
    render(<SelectTimeZone timezone="CET" setTimezone={mockSetTimezone} />);
    
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("CET");
  });
});

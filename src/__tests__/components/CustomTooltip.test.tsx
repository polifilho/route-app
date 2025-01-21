import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomTooltip } from '../../components/CustomTooltip';
import '@testing-library/jest-dom';

// Mock CustomTooltip
const TestComponent = () => (
  <CustomTooltip title="Test Tooltip">
    <button>Hover me</button>
  </CustomTooltip>
);

describe('CustomTooltip Componet', () => {
  it('Should render the tooltip with the correct title', async () => {
    render(<TestComponent />);
    
    const button = screen.getByText(/hover me/i);
    expect(button).toBeInTheDocument();
    
    const tooltipBeforeHover = screen.queryByText(/test tooltip/i);
    expect(tooltipBeforeHover).not.toBeInTheDocument();
    
    fireEvent.mouseOver(button);
    
    const tooltipAfterHover = await screen.findByText(/test tooltip/i);
    expect(tooltipAfterHover).toBeInTheDocument();
  });

  it('Should apply custom styles to the tooltip', async () => {
    const { container } = render(<TestComponent />);
    
    const button = screen.getByText(/hover me/i);
    fireEvent.mouseOver(button);
    
    const tooltip = await screen.findByText(/test tooltip/i);
    
    expect(tooltip).toHaveStyle('color: #fff');
    expect(tooltip).toHaveStyle('top: -15px');
  });
});

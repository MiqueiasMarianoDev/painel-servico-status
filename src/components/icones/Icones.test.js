import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icones } from './Icones';
import { GoCheckCircleFill, GoClockFill, GoXCircle } from 'react-icons/go';

describe('Icones', () => {
  test('renders default null text', () => {
    render(<Icones status="unknown" />);
    
    const text = screen.getByText(/null/i);
    expect(text).toBeInTheDocument();
  });

  test('snapshot', () => {
    const {asFragment} = render(<Icones status="up" />);
    expect(asFragment()).toMatchSnapshot();
  });

});
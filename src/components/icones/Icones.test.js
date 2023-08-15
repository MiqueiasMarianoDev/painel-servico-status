import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icones } from './Icones';
import { GoCheckCircleFill, GoClockFill, GoXCircle } from 'react-icons/go';

describe('Icones', () => {
/*
  test('renders ok icon', () => {
    render(<Icones status="up" />);
    
    const icon = screen.getByType(GoCheckCircleFill);
    expect(icon).toBeInTheDocument();
  });

  test('renders warning icon', () => {
    render(<Icones status="warning" />);
    
    const icon = screen.getByType(GoClockFill);
    expect(icon).toBeInTheDocument();
  });

  test('renders error icon', () => {
    render(<Icones status="error" />);
    
    const icon = screen.getByType(GoXCircle);
    expect(icon).toBeInTheDocument();
  });
*/
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
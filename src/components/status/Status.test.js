import React from 'react';
import { render, screen } from '@testing-library/react';
import { Status } from './Status';
import { Icones } from '../icones/Icones';

describe('Status', () => {

  test('renders green status', () => {
    render(<Status _status={{props: {cell: {value: 'up'}}}} />);
    
    const status = screen.getByRole('status');
    expect(status).toHaveClass('green');
  });

  test('renders gray status', () => {
    render(<Status _status={{props: {cell: {value: 'warning'}}}} />);
    
    const status = screen.getByRole('status');
    expect(status).toHaveClass('gray'); 
  });

  test('renders red status', () => {
    render(<Status _status={{props: {cell: {value: 'error'}}}} />);
    
    const status = screen.getByRole('status');
    expect(status).toHaveClass('red');
  });  

  test('renders default status', () => {
    render(<Status _status={{props: {cell: {value: 'unknown'}}}} />);
    
    const status = screen.getByRole('status');
    expect(status).not.toHaveClass('red');
    expect(status).not.toHaveClass('green');
    expect(status).not.toHaveClass('gray');
  });

  test('renders Icones component', () => {
    render(<Status _status={{props: {cell: {value: 'up'}}}} />);
    
    const icones = screen.getByType(Icones);
    expect(icones).toBeInTheDocument();
  });

  test('snapshot', () => {
    const {asFragment} = render(<Status _status={{props: {cell: {value: 'up'}}}} />);
    expect(asFragment()).toMatchSnapshot();
  });

});
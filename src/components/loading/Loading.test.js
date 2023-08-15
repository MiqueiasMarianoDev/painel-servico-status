import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading', () => {

  test('renders loading message', () => {
    render(<Loading />);
    
    const loadingMessage = screen.getByText(/Carregando.../i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test('snapshot', () => {
    const {asFragment} = render(<Loading />);
    
    expect(asFragment()).toMatchSnapshot();
  });

});
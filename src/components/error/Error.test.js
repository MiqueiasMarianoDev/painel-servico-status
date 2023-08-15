import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error', () => {

  test('renders error message', () => {
    render(<Error mensagem="Erro de conexão" />);
    
    const errorMessage = screen.getByText(/Erro de conexão/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders default error message', () => {
    render(<Error />);
    
    const errorMessage = screen.getByText(/Oops, ocorreu um erro/i);
    expect(errorMessage).toBeInTheDocument();
  });


  test('snapshot', () => {
    const {asFragment} = render(<Error />);
    
    expect(asFragment()).toMatchSnapshot();
  });

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Painel } from './components/painel/Painel';

describe('App', () => {

  test('renders header text', () => {
    render(<App />);
    const headerText = screen.getByText(/Tarefa Prática de Desenvolvimento de Software/i);
    expect(headerText).toBeInTheDocument();
  });

  test('renders Painel component', () => {
    render(<App />);
    const painelComponent = screen.getByType(Painel);
    expect(painelComponent).toBeInTheDocument();
  });

  test('App snapshot', () => {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('calls Painel component', () => {
    const mockPainel = jest.fn();
    jest.mock('./components/painel/Painel', () => mockPainel);
    render(<App />);
    expect(mockPainel).toHaveBeenCalled();
  });

});
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


  test('App snapshot', () => {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });


});
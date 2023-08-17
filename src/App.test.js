import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  test('renders header text', () => {
    render(<App />);
    const headerText = screen.getByText(/Tarefa Prática de Desenvolvimento de Software/i);
    expect(headerText).toBeInTheDocument();
  });

});
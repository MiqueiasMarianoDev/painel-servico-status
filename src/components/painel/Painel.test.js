import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Painel } from './Painel';

describe('Painel', () => {
  it('renders correctly', () => {
    render(<Painel />);
    
    expect(screen.getByText('Painel')).toBeInTheDocument();
    expect(screen.getByText('Teste:')).toBeInTheDocument();
  });

  it('displays table when environment is selected', async () => {
    render(<Painel />);
    
    const select = screen.queryByText('Ambiente');
    await userEvent.selectOptions(select, 'OK');
    
    expect(screen.getByText('Painel com Dados')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays loading indicator when Loading is selected', async () => {
    render(<Painel />);
    
    const select = screen.getByLabelText('Ambiente');
    await userEvent.selectOptions(select, 'Loading');
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error message when Error is selected', async () => {
    render(<Painel />);
    
    const select = screen.getByLabelText('Ambiente');
    await userEvent.selectOptions(select, 'Error');
    
    expect(screen.getByText('Ocorreu um erro')).toBeInTheDocument();
  });
});
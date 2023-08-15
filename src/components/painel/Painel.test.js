import React from 'react';
import { render, screen } from '@testing-library/react';
import { Painel } from './Painel';
import { Table } from '../table/Table';

describe('Painel', () => {

  test('renders Table component', () => {
    render(<Painel />);
    const table = screen.getByType(Table);
    expect(table).toBeInTheDocument();
  }); 

  test('renders 3 Table components', () => {
    render(<Painel />);
    const tables = screen.getAllByType(Table);
    expect(tables.length).toBe(3);
  });

  test('first Table has data', () => {
    render(<Painel />);
    const firstTable = screen.getAllByType(Table)[0];
    expect(firstTable).toHaveTextContent('Painel com Dados');
  });

  test('second Table loading=true', () => {
    render(<Painel />);
    const secondTable = screen.getAllByType(Table)[1];
    expect(secondTable.props.loading).toBeTruthy();
  });  

  test('third Table error=true', () => {
    render(<Painel />);
    const thirdTable = screen.getAllByType(Table)[2];
    expect(thirdTable.props.error).toBeTruthy();
  });

  test('snapshot', () => {
    const {asFragment} = render(<Painel />);
    expect(asFragment()).toMatchSnapshot();
  });

});
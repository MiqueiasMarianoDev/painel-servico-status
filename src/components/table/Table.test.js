import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

const columns = [{
  Header: 'Coluna 1',
  accessor: 'col1' 
}]

const data = [
  { col1: 'Valor 1' }, 
  { col1: 'Valor 2' }
]

describe('Table', () => {

  test('renders table element', () => {
    render(<Table _columns={columns} _data={data} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('renders header', () => {
    render(<Table _columns={columns} _data={data} />);
    const header = screen.getByRole('columnheader', { name: /Coluna 1/i});
    expect(header).toBeInTheDocument();
  });

  test('renders rows', () => {
    render(<Table _columns={columns} _data={data} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);
  });


  test('snapshot', () => {
    const {asFragment} = render(<Table _columns={columns} _data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });  

});
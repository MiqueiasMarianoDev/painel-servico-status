import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import { Status } from '../status/Status';
import { Loading } from '../loading/Loading';
import { Error } from '../error/Error';

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
    expect(rows.length).toBe(3); // inclui header
  });
/*
  test('renders data in rows', () => {
    render(<Table _columns={columns} _data={data} />);
    const cells = screen.getAllByRole('cell');
    expect(cells[1]).toHaveTextContent('Valor 1');
    expect(cells[2]).toHaveTextContent('Valor 2');
  });

  test('renders Status component', () => {
    const statusColumn = {
      Header: 'Status',
      accessor: 'status',  
    };
    const statusData = [{status: 'Pendente'}];
    render(<Table _columns={[statusColumn]} _data={statusData} />);
    
    const statusComponent = screen.getByType(Status);
    expect(statusComponent).toBeInTheDocument();
  });

  test('renders Loading component if loading=true', () => {
    render(<Table _columns={columns} loading={true} />);
    
    const loadingComponent = screen.getByType(Loading);
    expect(loadingComponent).toBeInTheDocument();
  });

  test('renders Error component if error=true', () => {
    render(<Table _columns={columns} error={true} />);
    
    const errorComponent = screen.getByType(Error);
    expect(errorComponent).toBeInTheDocument(); 
  });
  */

  test('snapshot', () => {
    const {asFragment} = render(<Table _columns={columns} _data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });  

});
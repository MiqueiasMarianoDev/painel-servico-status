import React, { useMemo } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import './Table.module.css'
import { Status } from '../status/Status';
import { Loading } from '../loading/Loading';
import { Error } from '../error/Error';


export const Table = ({_columns, _data, loading, error}) => {
  const columns = useMemo(() => _columns, [_columns]);
  const data = useMemo(() => _data, [_data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows && rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                if (cell.column.id === "status") {
                                  return <td {...cell.getCellProps()}><Status _status={cell.render('Cell')} /></td>
                                }
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })
                }
            </tbody>   
        </table>
        {loading && (
          <Loading />
        )}
        {error &&
          <Error />
        }


    </>
  )
}
Table.defaultProps = {
  loading: false,
  error: false
}
import React from 'react'
import { Table } from '../table/Table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../columns'

export const Painel = () => {
  return (
    <div>
      <h2>Painel</h2>
      <h3>Painel com Dados</h3>
      <Table _columns={COLUMNS} _data={MOCK_DATA} />
      <h3>Painel Loading</h3>
      <Table _columns={COLUMNS} _data={[]} />
    </div>
  )
}
import React, {useState} from 'react'

import { PainelDeControle } from '../PainelDeControle/PainelDeControle';
import { Table } from '../table/Table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../columns'

export const Painel = () => {
  const [environment, setEnvironment] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([MOCK_DATA])

  function paramsTableDefault(){
    setLoading(false)
    setError(false)
    setData([])
  }

  function changeEnvironment(value) {
    paramsTableDefault()

    setEnvironment(value)

    switch (value) {
      case 'OK':
        setData(MOCK_DATA)
        break;
      case 'Loading':
        setLoading(true)
      break;
      case 'Error':
        setError(true)
      break;
    
      default:
        break;
    }

  }

  return (
    <div>

      <p>Teste: {environment}</p>

      <h2>Painel</h2>
      <PainelDeControle changeEnvironment={changeEnvironment}/>

      {environment !== '' && (
        <div>
        <h3>Painel com Dados</h3>
       <Table _columns={COLUMNS} _data={data} loading={loading} error={error}/>
       </div>
       )}
    </div>
  )
}
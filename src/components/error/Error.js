import React from 'react'

export const Error = ({mensagem}) => {
    return (
      <div className="erro">
        <p>Oops, ocorreu um erro:</p>
        <p>{mensagem}</p>
      </div>
    );
  
}
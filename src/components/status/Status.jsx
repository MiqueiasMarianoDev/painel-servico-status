import React from 'react'
import './Status.module.css'
import { Icones } from '../icones/Icones';

export const Status = ({_status}) => {

  const status = _status.props.cell.value;

  let color = '';

  switch(status) {
    case 'up':
      color = 'green';
      break;
    case 'warning':
      color = 'gray';
      break;
    case 'error':
      color = 'red';
      break;
    default: 
      color = '';
  }

  return (
    <div className={`status ${color}`}>
      <Icones status={status} />
    </div>
  );

  }



import React from 'react'
import { OkIcon } from '../icones/OkIcon';
import { WarningIcon } from '../icones/WarningIcon';
import { ErrorIcon } from '../icones/ErrorIcon';

export const Status = ({status}) => {

  switch (status.props.cell.value) {
    case 'up':
      return <OkIcon />
    case 'warning': 
      return <WarningIcon />
    case 'error':
      return <ErrorIcon />
    default:
      return <p>null</p>
  }
}
import React from 'react'

import { GoCheckCircleFill as OkIcon,
         GoClockFill as WarningIcon,
         GoXCircle as ErrorIcon} from 'react-icons/go'
         

export const Icones = ({status}) => {

  switch (status) {
    case 'up':
      return <OkIcon color='green'/>
    case 'warning': 
      return <WarningIcon color='grey' />
    case 'error':
      return <ErrorIcon color='red' />
    default:
      return <p>null</p>
  }

}

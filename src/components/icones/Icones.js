import React from 'react'

import { GoCheckCircleFill as OkIcon,
         GoClockFill as WarningIcon,
         GoXCircle as ErrorIcon} from 'react-icons/go'

import OKAnimationData from '../animation/animation_llbp5q8p.json'
import WarningAnimationData from '../animation/animation_llbqbar9.json'
import ErrorAnimationData from '../animation/animation_llbqb64i.json'
import { Animation } from './Animation'


export const Icones = ({status}) => {

      const useAnimantion = true

      if (useAnimantion) {
        switch (status) {
            case 'up':
              return <Animation animationData={OKAnimationData}/>
            case 'warning': 
              return <Animation animationData={WarningAnimationData} width={25} height={20}/>
            case 'error':
                return <Animation animationData={ErrorAnimationData}/>
            default:
              return <p>null</p>
          }
      } else {
        switch (status) {
            case 'up':
              return <OkIcon color='green' />

            case 'warning': 
              return <WarningIcon color='grey' />
            case 'error':
              return <ErrorIcon color='red' />
            default:
              return <p>null</p>
          }
      }
}

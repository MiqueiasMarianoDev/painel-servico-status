import React from 'react'
import { Animation } from '../icones/Animation';
import ErrorAnimationData from '../animation/animation_llbt6kvq.json'


export const Error = ({mensagem}) => {
    return (
      <div className="erro">
        <p>Oops, ocorreu um erro:</p>
        <Animation animationData={ErrorAnimationData} width={300} height={300} loop={true}/>
        <p>{mensagem}</p>
      </div>
    );
  
}
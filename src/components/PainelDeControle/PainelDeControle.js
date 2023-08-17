import React from 'react'
import './PainelDeControle.module.css'
import Style from './PainelDeControle.module.css'

export const PainelDeControle = ({changeEnvironment}) => {



  return (
    <div className={Style.PainelDeControle__Container}>
        <div className={Style.PainelDeControle__Column}>
            <button 
            className={Style.PainelDeControle__Button}
            onClick={(e) => changeEnvironment('OK')}>
                Ambiente 01
            </button>
            <p>Para Painel OK</p>
        </div>
        <div className={Style.PainelDeControle__Column}>
            <button 
            className={Style.PainelDeControle__Button}
            onClick={(e) => changeEnvironment('Loading')}>
                Ambiente 02
            </button>
            <p>Para Painel Loading</p>
        </div>
        <div className={Style.PainelDeControle__Column}>
            <button 
            className={Style.PainelDeControle__Button}
            onClick={(e) => changeEnvironment('Error')}>
                Ambiente 03
            </button>
            <p>Para Painel Error</p>
        </div>
        <div className={Style.PainelDeControle__Column}>
            <button 
            className={Style.PainelDeControle__Button}
            onClick={(e) => changeEnvironment('Random')}>
                Ambiente 04
            </button>
            <p>Para Painel Random</p>
        </div>
    </div>
  )
}

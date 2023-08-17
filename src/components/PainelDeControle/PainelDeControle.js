import React from 'react'
import './PainelDeControle.module.css'
import Style from './PainelDeControle.module.css'

export const PainelDeControle = () => {
  return (
    <div className={Style.PainelDeControle__Container}>
        <div className={Style.PainelDeControle__Column}>
            <button className={Style.PainelDeControle__Button}>Ambiente 01</button>
            <p>Para Painel OK</p>
        </div>
        <div className={Style.PainelDeControle__Column}>
            <button className={Style.PainelDeControle__Button}>Ambiente 02</button>
            <p>Para Painel Loading</p>
        </div>
        <div className={Style.PainelDeControle__Column}>
            <button className={Style.PainelDeControle__Button}>Ambiente 03</button>
            <p>Para Painel Error</p>
        </div>
        <div className={Style.PainelDeControle__Column}>
            <button className={Style.PainelDeControle__Button}>Ambiente 04</button>
            <p>Para Painel Random</p>
        </div>
    </div>
  )
}

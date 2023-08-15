import React from 'react'
import { Animation } from '../icones/Animation';
import LoadingAnimationData from '../animation/animation_llbrzglt.json'

export const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Carregando...</p> 
      <Animation animationData={LoadingAnimationData} width={50} height={50}loop={true}/>
    </div>
  );
}
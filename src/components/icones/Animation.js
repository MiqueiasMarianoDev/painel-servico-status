import React from 'react'
import Lottie from 'react-lottie';

export const Animation = ({animationData, width, height, loop}) => {

    const Options = {
        loop: loop,
        autoplay: true, 
        animationData,
      };

  return <Lottie
  options={Options} width={width}
  height={height}/>
}

Animation.defaultProps = {
    width: 30,
    height: 30,
    loop: false
}



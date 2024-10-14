import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const HeroP = () => {
    const [text] = useTypewriter({
        words: ['Fullstack Developer','Problem Solver','Passionate Coder'],
        loop: {},
        typeSpeed:100,
        deleteSpeed:80,
    })
  return (
    <p className="hero_tag text-gray_gradient">{text}
    <span>
        <Cursor cursorBlinking='true' cursorColor='white' cursorStyle='|'  />
    </span>
    </p>
  )
}

export default HeroP

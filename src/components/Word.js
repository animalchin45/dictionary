import React from 'react'

import Play from '../img/icon-play.svg'

function Word({ theme, currentWord }) {
  return (
    <div className={`display__word`}>
      <h1 className={`theme__font--${theme}`}>{currentWord.word}</h1>
      <h2 className='h2--phonetic'>{currentWord.phonetic}</h2>
      <button className='btn'>
        <Play />
      </button>
    </div>
  )
}

export default Word

import React from 'react'

import Play from '../img/icon-play.svg'

function Word({ theme, currentWord }) {
  const handlePlayClick = () => {
    const word = new Audio(currentWord.phonetics[0].audio)
    word.play()
  }

  return (
    <div className={`display__word`}>
      <h1 className={`theme__font--${theme}`}>{currentWord.word}</h1>
      <h2 className='h2--phonetic'>{currentWord.phonetics[0].text}</h2>
      <button className='btn' onClick={handlePlayClick}>
        <Play />
      </button>
    </div>
  )
}

export default Word

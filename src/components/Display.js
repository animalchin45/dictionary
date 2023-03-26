import React from 'react'

import Word from './Word'
import Meanings from './Meanings'

function Display({ theme, currentWord, errorMessage }) {
  return (
    <div className={`display app--${theme}`}>
      {currentWord.meanings.length > 0 && (
        <>
          <Word theme={theme} currentWord={currentWord} />
          <Meanings theme={theme} currentWord={currentWord} />
        </>
      )}
      {errorMessage.isError && (
        <div className='display__error'>
          <h4 className={`theme__font--${theme}`}>{errorMessage.title}</h4>
          <p>{errorMessage.message}</p>
        </div>
      )}
    </div>
  )
}

export default Display

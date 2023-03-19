import React from 'react'

import Word from './Word'
import Meanings from './Meanings'

function Display({ theme, currentWord }) {
  console.log(currentWord)
  return (
    <div className={`display app--${theme}`}>
      <Word theme={theme} currentWord={currentWord} />
      <Meanings theme={theme} currentWord={currentWord} />
    </div>
  )
}

export default Display

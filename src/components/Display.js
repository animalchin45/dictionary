import React from 'react'

import Word from './Word'

function Display({ theme, currentWord }) {
  return (
    <div className={`display app--${theme}`}>
      <Word theme={theme} currentWord={currentWord} />
    </div>
  )
}

export default Display

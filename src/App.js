import React, { useState } from 'react'

import Header from './components/Header'
import Search from './components/Search'

function App() {
  const [font, setFont] = useState('sans-serif')
  const [theme, setTheme] = useState('lite')

  return (
    <div className={`app app--${theme} ${font}`}>
      <Header font={font} setFont={setFont} theme={theme} setTheme={setTheme} />
      <Search font={font} theme={theme} />
    </div>
  )
}

export default App

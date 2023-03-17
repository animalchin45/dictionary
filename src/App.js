import React, { useState, useEffect } from 'react'

import { word } from './hooks/word'

import Header from './components/Header'
import Search from './components/Search'
import Display from './components/Display'

function App() {
  const [font, setFont] = useState('sans-serif')
  const [theme, setTheme] = useState('lite')
  const [currentWord, setCurrentWord] = useState([])

  useEffect(() => {
    const data = async () => {
      const response = await word('keyboard')
      setCurrentWord(response[0])
      console.log(response[0])
    }

    data()
  }, [])

  return (
    <div className={`app theme__app--${theme} ${font}`}>
      <Header font={font} setFont={setFont} theme={theme} setTheme={setTheme} />
      <Search font={font} theme={theme} />
      <Display theme={theme} currentWord={currentWord} />
    </div>
  )
}

export default App

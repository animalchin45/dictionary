import React, { useState, useEffect } from 'react'

import { word } from './hooks/word'

import Header from './components/Header'
import Search from './components/Search'
import Display from './components/Display'

function App() {
  const [font, setFont] = useState('sans-serif')
  const [theme, setTheme] = useState('lite')
  const [currentWord, setCurrentWord] = useState({
    meanings: [],
    sourceUrls: [],
  })
  const [termError, setTermError] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    isError: false,
    title: '',
    message: '',
  })

  useEffect(() => {
    const data = async () => {
      try {
        const response = await word('cat')
        setCurrentWord(response[0])
        setErrorMessage({
          isError: false,
          title: '',
          message: '',
        })
      } catch (error) {
        console.log(error)
      }
    }

    data()
  }, [])

  return (
    <div className={`app theme__app--${theme} ${font}`}>
      <Header font={font} setFont={setFont} theme={theme} setTheme={setTheme} />
      <Search
        font={font}
        theme={theme}
        setCurrentWord={setCurrentWord}
        termError={termError}
        setTermError={setTermError}
        setErrorMessage={setErrorMessage}
      />
      <Display
        theme={theme}
        currentWord={currentWord}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default App

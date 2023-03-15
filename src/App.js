import React, { useState } from 'react'

import Header from './components/Header'
import Search from './components/Search'

function App() {
  const [font, setFont] = useState('sans-serif')

  return (
    <div className={`app ${font}`}>
      <Header font={font} setFont={setFont} />
      <Search />
    </div>
  )
}

export default App

import React, { useState } from 'react'

import Logo from '../img/logo.svg'
import IconArrowDown from '../img/icon-arrow-down.svg'
import IconMoon from '../img/icon-moon.svg'

function Header({ font, setFont }) {
  const [open, setOpen] = useState(false)

  const fontText = (font) => {
    if (font === 'sans-serif') {
      return 'Sans Serif'
    } else if (font === 'serif') {
      return 'Serif'
    } else if (font === 'mono') {
      return 'Monospace'
    }
  }

  const handleFontClick = () => {
    setOpen(!open)
  }

  return (
    <header className='header'>
      <Logo />
      <div className='header__options'>
        <button className='btn btn--font' onClick={() => handleFontClick()}>
          <p className={`p-bold ${font}`}>{fontText(font)}</p>
          <IconArrowDown />
        </button>
        <div className='header__options__divide'></div>
        <div className='header__options__theme'>
          <button className='btn btn--theme btn--theme--lite'>
            <div className='btn--theme--switch btn--theme--switch--lite'></div>
          </button>
          <IconMoon />
        </div>
      </div>
    </header>
  )
}

export default Header

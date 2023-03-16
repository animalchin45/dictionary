import React, { useState } from 'react'

import IconArrowDown from '../img/icon-arrow-down.svg'

function FontButtons({ font, setFont, theme }) {
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

  const handleFontSelect = (font) => {
    setFont(font)
    handleFontClick()
  }

  return (
    <>
      <button className='btn btn--font' onClick={() => handleFontClick()}>
        <p className={`p-bold p-bold--${theme} ${font}`}>{fontText(font)}</p>
        <IconArrowDown />
      </button>
      {open && (
        <ul
          className={`header__options__font-menu header__options__font-menu--${theme}`}
        >
          <li>
            <button
              className='btn'
              onClick={() => handleFontSelect('sans-serif')}
            >
              <p className={`p-bold p-bold--${theme} sans-serif`}>Sans Serif</p>
            </button>
          </li>
          <li>
            <button className='btn' onClick={() => handleFontSelect('serif')}>
              <p className={`p-bold p-bold--${theme} serif`}>Serif</p>
            </button>
          </li>
          <li>
            <button className='btn' onClick={() => handleFontSelect('mono')}>
              <p className={`p-bold p-bold--${theme} mono`}>Mono</p>
            </button>
          </li>
        </ul>
      )}
    </>
  )
}

export default FontButtons

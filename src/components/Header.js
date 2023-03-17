import React from 'react'

import Logo from '../img/logo.svg'
import IconMoon from '../img/icon-moon.svg'
import FontButtons from './FontButtons'

function Header({ font, setFont, theme, setTheme }) {
  const handleThemeClick = () => {
    if (theme === 'lite') {
      setTheme('dark')
    } else {
      setTheme('lite')
    }
  }

  return (
    <header className='header'>
      <Logo />
      <div className='header__options'>
        <FontButtons font={font} setFont={setFont} theme={theme} />

        <div className='header__options__divide'></div>

        <div className='header__options__theme'>
          <button
            className={`btn btn--theme theme__btn--${theme}`}
            onClick={() => handleThemeClick()}
          >
            <div className={`btn--theme--switch theme__switch--${theme}`}></div>
          </button>
          <IconMoon className={`theme__moon--${theme}`} />
        </div>
      </div>
    </header>
  )
}

export default Header

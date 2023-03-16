import React from 'react'

import Glass from '../img/icon-search.svg'

function Search({ font, theme }) {
  return (
    <form className='search'>
      <input
        className={`search__input search__input--${theme} ${font}`}
        placeholder='search dictionary'
      ></input>
      <button className='btn'>
        <Glass />
      </button>
    </form>
  )
}

export default Search

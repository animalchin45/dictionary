import React from 'react'

import Glass from '../img/icon-search.svg'

function Search() {
  return (
    <form className='search'>
      <input placeholder='Word'></input>
      <button className='btn'>
        <Glass />
      </button>
    </form>
  )
}

export default Search

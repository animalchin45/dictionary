import React, { useState } from 'react'

import { word } from '../hooks/word'

import Glass from '../img/icon-search.svg'

function Search({
  font,
  theme,
  setCurrentWord,
  termError,
  setTermError,
  setErrorMessage,
}) {
  const [term, setTerm] = useState('')

  const handleOnChange = (e) => {
    setTerm(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    if (term === '') {
      setTermError(true)
    } else {
      setTermError(false)
    }

    try {
      const response = await word(term)
      setCurrentWord(response[0])
      setTermError(false)
    } catch (error) {
      setCurrentWord({
        meanings: [],
        sourceUrls: [],
      })
      setErrorMessage({
        isError: true,
        title: error.response.data.title,
        message: error.response.data.message,
      })
      console.log(error)
    }
  }

  return (
    <form className='search' onSubmit={handleOnSubmit}>
      <input
        className={
          termError
            ? `search__input search__input--error theme__search__input--${theme} ${font}}`
            : `search__input theme__search__input--${theme} ${font}}`
        }
        placeholder='search dictionary'
        onChange={handleOnChange}
      ></input>
      {termError && (
        <label className='p-error'>Whoops, can't be empty...</label>
      )}
      <button className='btn' type='submit'>
        <Glass />
      </button>
    </form>
  )
}

export default Search

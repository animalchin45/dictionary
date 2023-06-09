import React from 'react'

import { v4 as uuid } from 'uuid'

import NewWindow from '../img/icon-new-window.svg'

function Meanings({ theme, currentWord }) {
  const renderedMeanings = currentWord.meanings.map((meaning) => {
    return (
      <div className='display__meanings' key={uuid()}>
        <div className='display__meanings__title'>
          <h3 className={`theme__font--${theme}`}>{meaning.partOfSpeech}</h3>
          <div className='display__meanings__line'></div>
        </div>
        <div className='display__meanings__definition'>
          <h4>Meaning</h4>
          <ul>
            {meaning.definitions.map((def) => {
              return (
                <li key={uuid()}>
                  <span className={`p theme__font--${theme}`}>
                    {def.definition}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        {meaning.synonyms.length > 0 && (
          <div className='display__meanings__synonyms'>
            <h4>Synonyms</h4>
            <h3 className={`theme__font--${theme} h3--synonym`}>
              {meaning.synonyms[0]}
            </h3>
          </div>
        )}
      </div>
    )
  })

  return (
    <>
      {renderedMeanings}
      <div className='display__source'>
        <p className='p-small p-small--source'>Source</p>
        <a
          className={`p-small theme__font--${theme}`}
          href={currentWord.sourceUrls[0]}
          target='_blank'
          rel='noreferrer noopener'
        >
          {currentWord.sourceUrls[0]}
        </a>
        <NewWindow />
      </div>
    </>
  )
}

export default Meanings

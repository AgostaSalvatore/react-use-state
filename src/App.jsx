import React from 'react'
import languages from './data/languages'

const App = () => {
  console.log(languages)
  return (
    <>
    <div>
      <h1>Learn Web Development</h1>
    </div>
    <div className='container'>
      <div className="accordion">
        <div className="accordion-item">
          <ul>
        {languages.map(language => (
          <li key={language.id}>
            <button className='btn'>
                {language.title}
            </button>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
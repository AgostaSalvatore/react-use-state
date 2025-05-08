import React, { useState } from 'react'
import AccordionTop from './components/accordion/AccordionTop'
import AccordionContent from './components/accordion/AccordionContent'
import languages from './data/languages'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)

  const toggleLanguage = (language) =>
    setActiveLanguage(activeLanguage?.id === language.id ? null : language)

  return (
    <>
      <div>
        <h1>Learn Web Development</h1>
      </div>
      <div className='container'>
        <div className="accordion">
          <AccordionTop setActiveLanguage={toggleLanguage} />
          <AccordionContent activeLanguage={activeLanguage} />
        </div>
      </div>
    </>
  )
}

export default App
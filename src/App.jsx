import React, { useState } from 'react'
import AccordionTop from './components/accordion/AccordionTop'
import AccordionContent from './components/accordion/AccordionContent'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <>
      <div>
        <h1>Learn Web Development</h1>
      </div>
      <div className='container'>
        <div className="accordion">
          <AccordionTop setActiveLanguage={setActiveLanguage} />
          <AccordionContent activeLanguage={activeLanguage} />
        </div>
      </div>
    </>
  )
}

export default App
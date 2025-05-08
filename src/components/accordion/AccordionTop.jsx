import React from 'react'
import languages from '../../data/languages'

const AccordionTop = () => {
    return (
        <div>
            <div className="accordion-buttons">
                <ul>
                    {languages.map(language => (
                        <li key={language.id}>
                            <button className='btn' onClick={() => setActiveLanguage(language)}>
                                {language.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AccordionTop
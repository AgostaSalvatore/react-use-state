import React, { useState } from 'react'
import languages from '../../data/languages'

const AccordionTop = ({ setActiveLanguage }) => {
    const [activeId, setActiveId] = useState(null)
    return (
        <div>
            <div className="accordion-buttons">
                <ul>
                    {languages.map(language => (
                        <li key={language.id}>
                            <button className={`btn ${activeId === language.id ? 'active' : ''}`} 
                                onClick={() => {
                                    setActiveLanguage(language);
                                    setActiveId(language.id);
                                }}>
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
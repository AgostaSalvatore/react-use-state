import React from "react";

const AccordionContent = ({ activeLanguage }) => {
    return (
        <div>
            <div className="accordion-content">
                {activeLanguage && (
                    <div>
                        <h2>{activeLanguage.title}</h2>
                        <p>{activeLanguage.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AccordionContent
import React, { useState } from 'react'
import './1.css'

const Maket1 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket1

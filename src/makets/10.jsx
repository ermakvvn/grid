import React, { useState } from 'react'
import './10.css'

const Maket10 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container10">
                <img src="img/image1.jpg" alt="Image 1" className="image10" />
                <img src="img/image2.jpg" alt="Image 2" className="image10" />
                <img src="img/image3.jpg" alt="Image 3" className="image10" />
                <img src="img/image4.jpg" alt="Image 4" className="image10" />
            </div>

            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container10">
                                    <img src="img/image1.jpg" alt="Image 1" className="image10" />
                                    <img src="img/image2.jpg" alt="Image 2" className="image10" />
                                    <img src="img/image3.jpg" alt="Image 3" className="image10" />
                                    <img src="img/image4.jpg" alt="Image 4" className="image10" />
                                </div>

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container10 {
                            display: grid;
                            grid-template-columns: repeat(4, minmax(200px, 1fr));
                            gap: 1rem;
                        }
                        .image10 {
                            width: 100%;
                            height: auto;
                        }
                        

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket10

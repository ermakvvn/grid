import React, { useState } from 'react'
import './9.css'

const Maket9 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container9">
                <div className="card9">
                    Card 1
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tempora deserunt nemo alias cumque, obcaecati quia
                        nam reiciendis eveniet distinctio iure aspernatur
                        ratione? Nostrum repellat dolor, ipsam ad a in soluta!
                    </p>
                </div>
                <div className="card9">Card 2</div>
                <div className="card9">Card 3</div>
                <div className="card9">Card 4</div>
                <div className="card9">Card 5</div>
                <div className="card9">Card 6</div>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container9">
                                    <div className="card9">Card 1</div>
                                    <div className="card9">Card 2</div>
                                    <div className="card9">Card 3</div>
                                    <div className="card9">Card 4</div>
                                    <div className="card9">Card 5</div>
                                    <div className="card9">Card 6</div>
                                </div>

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container9 {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            gap: 1rem;
                        }
                        .card9 {
                            border: 1px solid #ccc;
                            padding: 1rem;
                            text-align: center;
                        }
                        

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket9

import React, { useState } from 'react'
import './14.css'

const Maket14 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container">
                <div className="grid">
                    <div className="grid_item">1</div>
                    <div className="grid_item">
                        2
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ut suscipit, laudantium ex, dolore voluptatem
                            molestiae repellendus culpa autem aut fuga nihil
                            pariatur, facere placeat quaerat iure nam facilis
                            assumenda ab? Quos ratione adipisci facere inventore
                            recusandae a mollitia modi eveniet vero accusamus
                            error rerum omnis quaerat suscipit maxime, fugiat
                            voluptas consequatur magni nihil dolorum sequi sunt.
                        </p>
                    </div>
                    <div className="grid_item">3</div>
                    <div className="grid_item">4</div>
                    <div className="grid_item">5</div>
                    <div className="grid_item">6</div>
                    <div className="grid_item">7</div>
                    <div className="grid_item">8</div>
                    <div className="grid_item">9</div>
                    <div className="grid_item">10</div>
                    <div className="grid_item">11</div>
                    <div className="grid_item">12</div>
                </div>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container">
                                    <div className="grid">
                                        <div className="grid_item">1</div>
                                        <div className="grid_item">
                                            2
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing
                                                elit. Ut suscipit, laudantium ex, dolore voluptatem
                                                molestiae repellendus culpa autem aut fuga nihil
                                                pariatur, facere placeat quaerat iure nam facilis
                                                assumenda ab? Quos ratione adipisci facere inventore
                                                recusandae a mollitia modi eveniet vero accusamus
                                                error rerum omnis quaerat suscipit maxime, fugiat
                                                voluptas consequatur magni nihil dolorum sequi sunt.
                                            </p>
                                        </div>
                                        <div className="grid_item">3</div>
                                        <div className="grid_item">4</div>
                                        <div className="grid_item">5</div>
                                        <div className="grid_item">6</div>
                                        <div className="grid_item">7</div>
                                        <div className="grid_item">8</div>
                                        <div className="grid_item">9</div>
                                        <div className="grid_item">10</div>
                                        <div className="grid_item">11</div>
                                        <div className="grid_item">12</div>
                                    </div>
                                </div>

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .grid {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                            gap: 20px;
                        }
                        .grid_item {
                            padding: 15px;
                            background-color: rgb(134, 178, 217);
                        }
                        .grid_item:nth-child(2) {
                            background-color: rgb(215, 184, 106);
                            grid-column: 2/4;
                            grid-row: 1/3;
                        }
                        .grid_item:nth-child(3) {
                            background-color: rgb(215, 184, 106);
                            grid-column: 4/5;
                            grid-row: 1/3;
                        }
                        .grid_item:nth-child(9) {
                            background-color: rgb(215, 184, 106);
                            grid-column: 1/5;
                            grid-row: 4/5;
                        }
                        .grid_item:nth-child(7) {
                            background-color: blueviolet;
                            grid-column: 3 / span 2;
                        }
                        
                        @media (max-width: 600px) {
                            .grid {
                                display: grid;
                                grid-template-columns: 1fr;
                                gap: 20px;
                                background-color: aqua;
                            }
                            .grid_item:nth-child(2) {
                                grid-column: auto;
                                grid-row: auto;
                            }
                            .grid_item:nth-child(3) {
                                grid-column: auto;
                                grid-row: auto;
                            }
                            .grid_item:nth-child(9) {
                                grid-column: auto;
                                grid-row: auto;
                            }
                            .grid_item:nth-child(7) {
                                grid-column: auto;
                                grid-row: auto;
                            }
                        }
                        

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket14

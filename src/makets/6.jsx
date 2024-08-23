import React, { useState } from 'react'
import './6.css'

const Maket6 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container6">
                <div className="item6">Item 1</div>
                <div className="item6">Item 2</div>
                <div className="item6">Item 3</div>
                <div className="item6">Item 4</div>
                <div className="item6">
                    Item 5
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quos molestiae voluptate vero quibusdam velit
                        alias? Recusandae nesciunt tempora itaque officia ipsam
                        dignissimos accusantium voluptas atque iusto blanditiis!
                        Asperiores aperiam ea aliquid autem libero quos
                        accusamus? Temporibus, totam magnam! Esse, quibusdam!
                    </p>
                </div>
                <div className="item6">Item 6</div>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container6">
                                    <div className="item6">Item 1</div>
                                    <div className="item6">Item 2</div>
                                    <div className="item6">Item 3</div>
                                    <div className="item6">Item 4</div>
                                    <div className="item6">Item 5</div>
                                    <div className="item6">Item 6</div>
                                </div>
                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                         .container6 {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            gap: 1rem;
                        }
                        .item6 {
                            background-color: rgb(40, 181, 141);
                        }
                        
                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket6

import React, { useState } from 'react'
import './7.css'

const Maket7 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container7">
                <div className="item7 item_1">
                    Item 1
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus ipsa necessitatibus, totam numquam sit odit
                        sequi nihil? Dolorem praesentium nostrum fugiat tenetur
                        vitae, omnis, atque consequatur optio laudantium cum
                        excepturi!
                    </p>
                </div>
                <div className="item7 item_2">
                    Item 2
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quos nobis ex maxime modi officia sunt esse optio
                        eligendi ut, temporibus ab corporis! Eaque, velit earum
                        cumque provident ex consequuntur commodi!
                    </p>
                </div>
                <div className="item7 item_3">Item 3</div>
            </div>
            <p>Опа</p>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container7">
                                    <div className="item7 item_1">Item 1</div>
                                    <div className="item7 item_2">Item 2</div>
                                    <div className="item7 item_3">Item 3</div>
                                </div>
                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container7 {
                            display: grid;
                            grid-template-columns: 1fr ;
                            position: relative;
                        }
                        .item7 {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                        
                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket7

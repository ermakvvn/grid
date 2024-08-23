import React, { useState } from 'react'
import './3.css'

const Maket3 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container3">
                <header className="header3">Header</header>
                <main className="main3">
                    Main Content Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vel unde excepturi quia dolores rem sed,
                    repudiandae culpa, dolorem ipsam explicabo accusamus fugiat
                    qui temporibus! Unde odio similique sequi dolores
                    dignissimos!
                </main>
                <footer className="footer3">Footer</footer>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
          <div className="container">
          <header className="header">Header</header>
          <main className="main">Main Content</main>
          <footer className="footer">Footer</footer>
      </div>
                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                                .container {
                                    display: grid;
                                    grid-template-rows: auto 1fr auto;
                                    
                                }

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket3

import React, { useState } from 'react'
import './1.css'

const Maket1 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container1">
                <header className="header1">Header</header>
                <aside className="sidebar1">Sidebar</aside>
                <main className="main1">Main Content</main>
                <footer className="footer1">Footer</footer>
            </div>
            <div>
                <hr />
                <button onClick={toggleContent}>HTML/CSS</button>
                {isOpen && (
                    <div className="code">
                        <h3>HTML:</h3>
                        <pre>
                            {`
                            <>
                                <div className="container">
                                    <header className="header">Header</header>
                                    <aside className="sidebar">Sidebar</aside>
                                    <main className="main">Main Content</main>
                                    <footer className="footer">Footer</footer>
                                </div>
                            </>
                            `}
                        </pre>
                        <h3>CSS:</h3>
                        <pre>
                            {`
                            .container {
                                display: grid;
                                grid-template-columns: 1fr 3fr;
                                gap: 1rem;
                            }
                            .header,
                            .footer {
                                grid-column: 1 / 3;
                            }
                            `}
                        </pre>
                    </div>
                )}
            </div>
        </>
    )
}
export default Maket1

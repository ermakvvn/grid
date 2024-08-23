import React, { useState } from 'react'
import './2.css'

const Maket2 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container2">
                <header className="header2">Header</header>
                <aside className="sidebar-left2">Left Sidebar</aside>
                <main className="main2">Main Content</main>
                <aside className="sidebar-right2">Right Sidebar</aside>
                <footer className="footer2">Footer</footer>
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
            <aside className="sidebar-left">Left Sidebar</aside>
            <main className="main">Main Content</main>
            <aside className="sidebar-right">Right Sidebar</aside>
            <footer className="footer">Footer</footer>
        </div>
                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
        .container {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            gap: 1rem;
        }
        .header, .footer {
            grid-column: 1 / 4;
        }
                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket2

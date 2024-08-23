import React, { useState } from 'react'
import './4.css'

const Maket4 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container4">
                <header className="header4">Header</header>
                <aside className="sidebar4">Sidebar</aside>
                <main className="main4">
                    <h2>Main Content</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vitae assumenda blanditiis eaque nihil, provident
                        dolore sit aliquam error voluptatum debitis recusandae!
                        Sed labore dolorum aliquam voluptates enim? Hic itaque
                        ratione reiciendis quidem natus reprehenderit, provident
                        voluptates in aperiam, aspernatur dolorum modi
                        repudiandae sunt distinctio. Dolorem exercitationem
                        iste, magni nobis dolor magnam commodi accusamus veniam
                        repellendus doloremque aspernatur optio molestiae
                        nostrum sapiente dignissimos quasi rerum repudiandae
                        officiis! In aut perferendis officia ex. Itaque
                        voluptatum, facilis nobis consequatur commodi rem sunt
                        quidem, voluptatibus excepturi porro nisi harum odio
                        alias facere laudantium soluta! Voluptatum ex nesciunt
                        tempora, repellendus laborum nulla natus accusantium
                        nam.
                    </p>
                </main>
                <footer className="footer4">Footer</footer>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                            <div class="container">
                            <header className="header">Header</header>
                            <aside className="sidebar">Sidebar</aside>
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
            grid-template-columns: 1fr 3fr;
            gap: 1rem;
            min-height: 100vh;
        }
        .header, .footer {
            grid-column: 1 / 3;
        }
                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket4

import React, { useState } from 'react'
import './8.css'

const Maket8 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container8">
                <header className="header8">Header</header>
                <main className="main8">
                    Main Content
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In, sapiente. Consectetur dolorem sequi doloremque
                        rem, fugiat exercitationem delectus eius impedit.
                        Similique reiciendis consequuntur labore! Molestiae
                        expedita et rem possimus similique dolorum sequi nobis
                        vel nisi? Earum natus obcaecati officia, fugiat dicta
                        molestias rem quod. Blanditiis sequi facilis quae culpa
                        atque eum obcaecati, laborum inventore deleniti.
                    </p>
                </main>
                <footer className="footer8">Footer</footer>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container8">
                                    <header className="header8">Header</header>
                                    <main className="main8">Main Content</main>
                                    <footer className="footer8">Footer</footer>
                                </div>

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container8 {
                            display: grid;
                            grid-template-rows: auto 1fr auto;
                            min-height: 100vh;
                            text-align: center;
                        }
                        .main8 {
                            display: grid;
                            align-items: center;
                        }
                        

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket8

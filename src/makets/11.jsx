import React, { useState } from 'react'
import './11.css'

const Maket11 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container11">
                <header className="header11">Header</header>
                <main className="main11">
                    Main Content
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed, velit suscipit. Dolore ea laborum aut vel
                        reiciendis facere provident iure similique
                        necessitatibus, voluptas, quos praesentium accusamus
                        recusandae corrupti itaque. Expedita earum corporis
                        velit cum minus adipisci sunt, numquam at, consequatur
                        temporibus, nemo quasi tempora deleniti fugit a quis in
                        odit dolor dolorum vel voluptatem blanditiis? Reiciendis
                        eaque laboriosam saepe. Ipsum, magnam laudantium at
                        consequuntur cum eos temporibus maiores! Non iste
                        ratione nobis quos incidunt sunt omnis ducimus error,
                        architecto voluptatibus modi. Necessitatibus fugit
                        dolorum aperiam dolor explicabo numquam corporis
                        aliquam, quis delectus in tenetur illo accusamus
                        mollitia magnam possimus laboriosam.
                    </p>
                </main>
                <footer className="footer11">Footer</footer>
            </div>

            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                            <div className="container11">
                                            <header className="header11">Header</header>
                                            <main className="main11">Main Content</main>
                                            <footer className="footer11">Footer</footer>
                                        </div>

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container11 {
                            display: grid;
                            grid-template-areas:
                                'header'
                                'main'
                                'footer';
                            grid-template-rows: auto 1fr auto;
                            min-height: 100vh;
                        }
                        .header11 {
                            grid-area: header;
                        }
                        .main11 {
                            grid-area: main;
                        }
                        .footer11 {
                            grid-area: footer;
                        }
                        .header11,
                        .footer11 {
                        background-color: rgb(102, 140, 173);
                        }                        
                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket11

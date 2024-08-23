import React, { useState } from 'react'
import './13.css'

const Maket13 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container13">
                <header className="header13">Header</header>
                <aside className="sidebar13">Sidebar</aside>
                <main className="main13">
                    Main Content
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Delectus molestias ad, aliquam possimus nulla
                        laborum amet. Eos perspiciatis possimus itaque ipsam ut
                        nihil veniam vero ad? Ducimus laborum possimus labore
                        dicta obcaecati nobis, placeat architecto veritatis
                        quibusdam, laudantium excepturi earum, libero asperiores
                        error perspiciatis consectetur dolorem voluptate fugit
                        velit. Laudantium inventore, velit, esse maiores
                        voluptatem, animi laboriosam eum facere perferendis
                        tempore numquam ducimus magni rem! Pariatur id eum
                        architecto excepturi cumque molestiae molestias, iste
                        eligendi quod, sit fugiat? Autem, distinctio!
                    </p>
                </main>
                <footer className="footer13">Footer</footer>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                            <div className="container13">
                                <header className="header13">Header</header>
                                <aside className="sidebar13">Sidebar</aside>
                                <main className="main13">Main Content</main>
                                <footer className="footer13">Footer</footer>
                            </div>
                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container13 {
                            display: grid;
                            grid-template-areas:
                                'header header'
                                'sidebar main'
                                'footer footer';
                            grid-template-columns: 1fr 3fr;
                            gap: 1rem;
                            min-height: 100vh;
                        }
                        .header13 {
                            grid-area: header;
                        }
                        .sidebar13 {
                            grid-area: sidebar;
                        }
                        .main13 {
                            grid-area: main;
                        }
                        .footer13 {
                            grid-area: footer;
                        }                        

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket13

import React, { useState } from 'react'
import './5.css'

const Maket5 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container5">
                <header className="header5">Header</header>
                <main className="main5">
                    <h2>Main Content</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quisquam vero alias assumenda, earum totam nihil
                        provident ipsum sunt nulla nostrum, mollitia explicabo
                        est dignissimos laborum, vitae quod repellat porro
                        delectus ab deleniti. Cupiditate, voluptatibus autem
                        placeat quod et modi odit sunt optio quo labore. Dolore
                        asperiores rerum ea vero saepe culpa enim, aperiam
                        molestias laboriosam ducimus iste earum eveniet nobis
                        sint, ut veritatis dolor quia, nihil neque voluptatibus
                        possimus. Sequi itaque ipsam pariatur nesciunt
                        consequuntur. Amet voluptatem nam minus culpa est
                        asperiores dolorem, ad excepturi voluptatibus omnis
                        enim.
                    </p>
                </main>
                <footer className="footer5">Footer</footer>
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
                            min-height: 100vh;
                            background-image: url('background.jpg');
                            background-size: cover;
                            color: white;
                        }
                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket5

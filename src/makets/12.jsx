import React, { useState } from 'react'
import './12.css'

const Maket12 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="container12">
                <header className="header12">Header</header>
                <aside className="sidebar-left12">Left Sidebar</aside>
                <main className="main12">
                    Main Content
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum quas tempore voluptatem ipsa, animi dolore!
                        Laboriosam, sed omnis? Eligendi assumenda laudantium
                        omnis excepturi impedit aperiam veritatis maxime tempora
                        saepe est reiciendis quas molestias ipsam animi,
                        incidunt doloremque, amet cumque ea illo repellendus
                        pariatur distinctio! Omnis et molestiae debitis magni
                        eum suscipit, sed perspiciatis explicabo quo autem ipsam
                        vitae, nesciunt fugiat iusto recusandae esse dignissimos
                        quos laudantium sit ea id nisi! Voluptatum cupiditate
                        minus id molestias.
                    </p>
                </main>
                <aside className="sidebar-right12">Right Sidebar</aside>
                <footer className="footer12">Footer</footer>
            </div>
            <hr />
            <button onClick={toggleContent}>HTML/CSS</button>
            {isOpen && (
                <div className="code">
                    <h3>HTML:</h3>
                    <pre>
                        {`
                                    <div className="container12">
                                    <header className="header12">Header</header>
                                    <aside className="sidebar-left12">Left Sidebar</aside>
                                    <main className="main12">Main Content</main>
                                    <aside className="sidebar-right12">Right Sidebar</aside>
                                    <footer className="footer12">Footer</footer>
                                </div>

                            `}
                    </pre>
                    <h3>CSS:</h3>
                    <pre>
                        {`
                        .container12 {
                            display: grid;
                            grid-template-areas:
                                'header header header'
                                'sidebar-left main sidebar-right'
                                'footer footer footer';
                            grid-template-columns: 1fr 3fr 1fr;
                            gap: 1rem;
                            min-height: 80vh;
                        }
                        .header12 {
                            grid-area: header;
                            background-color: rgb(235, 125, 126);
                        }
                        .sidebar-left12 {
                            grid-area: sidebar-left;
                            background-color: rgb(105, 87, 155);
                        }
                        .main12 {
                            grid-area: main;
                        }
                        .sidebar-right12 {
                            grid-area: sidebar-right;
                            background-color: rgb(181, 224, 88);
                        }
                        .footer12 {
                            grid-area: footer;
                            background-color: rgb(73, 83, 52);
                        }
                        

                            `}
                    </pre>
                </div>
            )}
        </>
    )
}
export default Maket12

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import Maket1 from './makets/1'
import Maket2 from './makets/2'
import Maket3 from './makets/3'
import Maket4 from './makets/4'
import Maket5 from './makets/5'
import Maket6 from './makets/6'
import Maket7 from './makets/7'
import Maket8 from './makets/8'
import Maket9 from './makets/9'
import Maket10 from './makets/10'
import Maket11 from './makets/11'
import Maket12 from './makets/12'
import Maket13 from './makets/13'
import Maket14 from './makets/14'

function App() {
    return (
        <div className="app">
            <Header />
            <div className="contentMain">
                <Sidebar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/1" element={<Maket1 />} />
                        <Route path="/2" element={<Maket2 />} />
                        <Route path="/3" element={<Maket3 />} />
                        <Route path="/4" element={<Maket4 />} />
                        <Route path="/5" element={<Maket5 />} />
                        <Route path="/6" element={<Maket6 />} />
                        <Route path="/7" element={<Maket7 />} />
                        <Route path="/8" element={<Maket8 />} />
                        <Route path="/9" element={<Maket9 />} />
                        <Route path="/10" element={<Maket10 />} />
                        <Route path="/11" element={<Maket11 />} />
                        <Route path="/12" element={<Maket12 />} />
                        <Route path="/13" element={<Maket13 />} />
                        <Route path="/14" element={<Maket14 />} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default App

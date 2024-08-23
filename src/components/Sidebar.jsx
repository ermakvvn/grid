import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="sidebarMain">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/1">1. Базовая двухколоночная разметка</Link>
                    </li>
                    <li>
                        <Link to="/2">2. Трехколоночная разметка</Link>
                    </li>
                    <li>
                        <Link to="/3">3. Разметка с шапкой и подвалом</Link>
                    </li>
                    <li>
                        <Link to="/4">
                            4. Разметка с сайдбаром и основным контентом
                        </Link>
                    </li>
                    <li>
                        <Link to="/5">5. Разметка с фоновым изображением</Link>
                    </li>
                    <li>
                        <Link to="/6">6. Разметка с адаптивной сеткой</Link>
                    </li>
                    <li>
                        <Link to="/7">
                            7. Разметка с перекрывающимися элементами
                        </Link>
                    </li>
                    <li>
                        <Link to="/8">8. Разметка с фокусом на контенте</Link>
                    </li>
                    <li>
                        <Link to="/9">9. Разметка с карточками</Link>
                    </li>
                    <li>
                        <Link to="/10">
                            10. Разметка с фокусом на изображениях
                        </Link>
                    </li>
                    <li>
                        <Link to="/11">
                            11. азметка с использованием grid-area для шапки и
                            подвала
                        </Link>
                    </li>
                    <li>
                        <Link to="/12">
                            12. Разметка с двумя сайдбарами и основным контентом
                            c grid-template-areas
                        </Link>
                    </li>
                    <li>
                        <Link to="/13">
                            13. Разметка с сайдбаром и основным контентом и
                            использованием grid-area
                        </Link>
                    </li>
                    <li>
                        <Link to="/14">14. Слияние ячеек в grid</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar

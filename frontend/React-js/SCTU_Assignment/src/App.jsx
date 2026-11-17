import { useContext } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

function Layout() {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={`app ${theme}`}>

            <Navbar />

            <div className="layout">

                <Sidebar />

                <main className="main-content">
                    <Outlet />
                </main>

            </div>

            <Footer />

        </div>
    )
}

function App() {

    return (
        <Routes>

            <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="products" element={<Products />} />

                <Route path="cart" element={<Cart />} />

                <Route path="profile" element={<Profile />} />

            </Route>

        </Routes>
    )
}

export default App

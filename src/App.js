import { Route, Routes, Link } from "react-router-dom"
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import ProductListPage from "./pages/product/list";

export function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductListPage />} />
                <Route path='/products/:id' element={<ProductPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App;

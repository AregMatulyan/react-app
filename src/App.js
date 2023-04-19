import { Route, Routes, Link } from "react-router-dom"
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import ProductListPage from "./pages/product/list";
import ProductEditPage from "./pages/product/edit";

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
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/products' element={<ProductListPage />} />
                <Route exact path='/products/:id' element={<ProductPage />} />
                <Route exact path='/products/:id/edit' element={<ProductEditPage />} />
                <Route path="*" element={<h1>Page ot found</h1>} />
            </Routes>
        </>
    )
}

export default App;

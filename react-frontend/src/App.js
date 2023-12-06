import './App.css';
import ProductComponent from './components/ProductComponent';
import WishlistComponent from './components/WishlistComponent';
import CartComponent from './components/CartComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/wishList'
          element={<WishlistComponent />} />
        <Route
          path='/cart'
          element={<CartComponent />} />
      </Routes>

      <ProductComponent />
    </>
  );
}

export default App;
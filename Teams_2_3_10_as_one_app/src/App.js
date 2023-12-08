import './App.css';
import ProductComponent from './components/ProductComponent';
import WishlistComponent from './components/WishlistComponent';
import CartComponent from './components/CartComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";

import { useState, useEffect } from 'react';
import ProductDetails from "./components/team3/ProductDetails"

function App() {

  const [prodId,setProdId] = useState(null);
  const [openProdPage,setOpenProdPage] = useState(false);


 const selectProduct=(prdId)=>{
  console.log("CALL FOR PROD  "+prdId);
    setProdId(prdId);
    setOpenProdPage(true);
  }

  const selectSearchPage=()=>{
      setProdId(null);
      setOpenProdPage(false);
    }


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

      {openProdPage==true  && <ProductDetails productId={prodId} selectPage={selectSearchPage}/>}
      {openProdPage==false && prodId==null && <ProductComponent selectPage={selectProduct} />}
      </>
  ); 


}

export default App;
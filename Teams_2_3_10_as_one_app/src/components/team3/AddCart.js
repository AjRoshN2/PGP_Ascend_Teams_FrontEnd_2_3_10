import React from "react"
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./css/AddCart.css"

function AddCart(props){

    const [error,setError] = useState(null);
    const [addSuccess,setAddSuccess] = useState(null);

   let quantity=getQuantity(props);

    
    console.log("quantity is "+quantity);
    
    const buttonText= ()=>{
        console.log("Button TXT Calling");
        if(quantity > 0){
            return quantity
            }
            else{
            return "Add to Cart";
            } 
    }

    const  addItemToCart = async (qty)=>{
        console.log("AddToCart QTY "+qty)

        setError(null);
        setAddSuccess(null);
        setRemoveSuccess(null);
        setUserLoggedIn(true);
        let prodFound=false;
        let newCart ={};

        if(JSON.stringify(props.cart)!="{}"){
        newCart = {

            "id":props.cart.cartId,
            "email":cookies.user,
            "products":

                props.cart.products.map((product)=>{

                    if(product.productId==props.prodId){
                       const updatedProd={
                            "productId":product.productId,
                            "quantity":(product.quantity<0 && qty>0)?1:product.quantity+qty
                        }
                        prodFound=(product.quantity<=0 && qty<0)?false:true;
                        return updatedProd;
                    }             
                    else
                        return product;


                })

            
        };

        if(prodFound===false && qty>0){

            const newProd={
                "productId":props.prodId,
                "quantity":qty
            }

            newCart={...newCart,"products":[...newCart.products,newProd]}
            
            console.log("New cart is "+JSON.stringify(newCart));
        }
    }
        try{
       await axios.post("http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/api/auth/addcart", newCart,{withCredentials: true, headers: {"content-type": "application/json"}}).then((response) => {
      //  await axios.post("http://localhost:9200/api/auth/addcart", newCart,{withCredentials: true, headers: {"content-type": "application/json"}}).then((response) => {
      console.log(response.status);

      if(response.status==401){
        setUserLoggedIn=false
        console.log("User not logged in")
      }

      if(qty>0)
          setAddSuccess(true);
      else if(qty<0 && prodFound===true )
          setRemoveSuccess(true);
    });



        props.handleCount();
        if(qty==0){
            console.log("Called AddToCart")
    }
    else {
        quantity=quantity+qty;
    }
    console.log("QUANTITY AFTER CALL "+quantity)
    setError(null);
}
catch(error){
    //console.log("User not logged in "+error.response.status);
    if(error.response.status==401){
        setUserLoggedIn(false);
    }else{
        setError(error);
    }
}
    }
    


const  addToWishlist = async ()=>{
        console.log("addToWishlist")
        setError(null);
        let newWishList = {

            "user":cookies.user,
            "id": props.prodId
        };


        try{
       await axios.post("http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/api/auth/addwishlist", newWishList,{withCredentials: true, headers: {"content-type": "application/json"}}).then((response) => {
       // await axios.post("http://localhost:9200/api/auth/addwishlist", newWishList,{withCredentials: true, headers: {"content-type": "application/json"}}).then((response) => {
      console.log(response.status, response.data.token);
      //setAddSuccess(true);
      setAddWishListStatus(true);
    });
    props.handleCount();
    }
    catch(error){
    setError(error);
}
    }


const removeFromWishList=async()=>{
    console.log("Remove fromWishlist")
    setError(null);
    let removeWishList = {

        "id": props.prodId
    };


    try{
   await axios.post("http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/api/auth/deletewishlist", removeWishList,{withCredentials: true, headers: {"content-type": "application/json"}}).then((response) => {
  //await axios.delete("http://localhost:9200/api/auth/deletewishlist", removeWishList,{withCredentials: true, headers: {"content-type": "application/json"}}).then((response) => {
  console.log(response.status);
  //setAddSuccess(true);
  setAddWishListStatus(false);
});
props.handleCount();
}
catch(error){
    setError(error);
    }
}


    function getQuantity(props){

        const prodId=props.prodId
    
        const cart = props.cart
        const products = cart.products
        console.log("Products in addcart "+products)
        let quantityVal=0 ; 
        
        products.map((product) => {
            if(product.id==prodId)         
            {
                
                quantityVal = product.quantity 
            }
        })
        return quantityVal
    }
    
    

    return (
        <div className="grid-container">
        <div className="grid-child">
        <div className={props.disableButton===true?"addCartDiv2":"addCartDiv1"}>
            <button type="button"  className={props.disableButton===true?"addCartButtonDis":"addCartButton"} onClick={()=>{addItemToCart(-1);}} disabled={props.disableButton}>-</button> 
                         &nbsp; {buttonText()} &nbsp;   
            <button type="button"  className={props.disableButton===true?"addCartButtonDis":"addCartButton"}  onClick={()=>{addItemToCart(1);} } disabled={props.disableButton}>+</button>

            
        </div>

        {(error!==null)?<div className="hideMe"><p style={{color:"red", fontWeight:"bold", fontSize:"10px"}}>Error while adding to cart</p></div>:' '}
        {(addSuccess===true)?<div className="hideMe"><p style={{color:"green", fontWeight:"bold", fontSize:"10px"}}>Added successfully to cart!</p></div>:' '}

        </div>
        <div className="grid-child">
        <button type="button"  className="saveButton" >Save for later</button>
        </div>
</div>
    )

}



export default AddCart;
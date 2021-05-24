import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {addToWishlist, fetchProducts, removeFromWishlist} from "./redux";
import {useDispatch, useSelector} from "react-redux";

const Header = ()=>{
    const {wishlist} = useSelector(({products}) =>products)
    const wishlitTotalPrice = wishlist.reduce((acc,el)=>{
        return (acc+=el.price);
    },0)
    return(
        <>
        <header style={{
            display:'flex',
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <h2>Our nice shop!</h2>
            <div style={{
                display:"flex",
                alignItems:"center"
            }}>
                <h2 style={{marginRight:'20px'}}>cart:{0}</h2>
                <h2 title={wishlitTotalPrice}>wishlist:{wishlist.length}</h2>
            </div>

        </header>
            <hr/>
        </>
    )
}

const isInWishlist = (wishlist,id) =>!!wishlist.find(el=>el.id===id)
const Products = ()=>{
    const {wishlist} = useSelector(({products}) =>products)

    const {products, isProductsLoading} = useSelector(({products})=>products)
    const dispatch = useDispatch();

    useEffect(()=>{
dispatch(fetchProducts(/*{
    field:'price',
    oreder:'ASC'
}*/));
    },[])
    if (isProductsLoading){
        return  <div>LOADING!!!</div>
    }
    return(
        <div>
            {products.map(product =>(
                <div key={product.id} style={{
                    width:'70%',
                    margin:'20px auto'
                }}>
                    <button onClick={()=>{
                     isInWishlist(wishlist,product.id) ? dispatch(removeFromWishlist(product.id))
                         :dispatch(addToWishlist(product.id));
                    }}>{isInWishlist(wishlist,product.id) ? 'remove from wishlist' :'add to wishlist'}</button>
                    <h4>{product.title}
                        <br/>
                        Price: {product.price}</h4>
                    <p>{product.description}</p>
                    <img style={{
                        width:'100%'
                    }} src={product.image} alt="test"/>
                </div>
                )
            )}
        </div>
    )
}


export default function App() {
    return (
        <div className="App">
            <Header/>
            <Products/>
        </div>
    );
};


import { React, useState } from "react";
import { dummyProducts } from "../../fixtures";
import { NavBar } from "../NavBar";
import './styles.css';

function ProductBlock () {

    const [cart, setCart ] = useState([])
    const [page, setPage] = useState("products")

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeCart = (productRemove) => { 
        setCart(cart.filter((product) => product !== productRemove))
    }

    const ViewCartPage = () => {
        return (
            <div className='wrapper'>
              { cart.map((data, index) => {
                  return (
                    <div className="product-block" key={index}>
                        <img src={data.photo} alt="gg" className="product-image"/>
                        <h4>{data.name}</h4>
                        <span>{data.price} </span><br/>
                        <button onClick={()=> removeCart(data)}>Remove</button>
                    </div>
                  )
               })
            } 
            </div>
        )
    } 

    const RenderProducts = () => {
        return (
        <div className="wrapper">
            { dummyProducts.map((data, index) => {
                return (
                <div className="product-block" key={index}>
                    <img src={data.photo} alt="gg" className="product-image"/>
                    <h4>{data.name}</h4>
                    <span>{data.price} </span><br/>
                    <button onClick={()=> addToCart(data)}>Add To Cart</button>
                </div>
                )
             }) 
             }
        </div>
        )
    }

    return (
        <>
        <NavBar value={cart.length} cartView={() => setPage('cart')}/>
        { page === 'products' && <RenderProducts/>}
        { page === 'cart' && <ViewCartPage/>}
      </>  
    )
}

export { ProductBlock }
export default ProductBlock
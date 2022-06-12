import React,{useState} from "react";
import { useSelector } from "react-redux";
import{BsCartDash} from "react-icons/bs"
import {CartMenu} from '../cart-menu';
import { calcTotatalPrice } from "../utils";
import {ItemsInCart} from '../items-in-cart'
import './cart-block.css'


export const CartBlock = () =>{
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totatalPrice = calcTotatalPrice(items)
    return(
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BsCartDash size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            { totatalPrice > 0 ? <span className="cart-block__total-price">{totatalPrice} руб.</span> : null}
            {isCartMenuVisible && <CartMenu items ={items} onClick={() => null}/>}
        </div>

    )
}
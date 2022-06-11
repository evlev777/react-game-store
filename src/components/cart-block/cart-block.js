import React from "react";
import{BsCartDash} from "react-icons/bs"
import './cart-block.css'

export const CartBlock = () =>{
    return(
        <div className="cart-block">
            <BsCartDash size={25} className="cart-block__icon"/>
            <span className="cart-block__total-price">60 руб.</span>
        </div>

    )
}
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart);
    const dispatch = useDispatch();
    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    };

    return (
        <div className="Cart">
            <h2>Your cart</h2>
            {cart.map(item => (
                <div key={item.id} className="Cart">
                    <span>{item.name}</span>
                    <Button variant="dark" className="button" onClick={() => removeFromCart(item)}>Remove</Button>
                </div>
            ))}
        </div>
    );
};

export default Cart;

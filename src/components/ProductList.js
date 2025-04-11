import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product});
    };

    return (
        <div className="Books">
            {products.map(product => (
                <div key={product.id} className="Books">
                    <h2>{product.name}</h2>
                    <Button variant="dark" onClick={() => addToCart(product)}>Add to cart</Button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

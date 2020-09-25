import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, incrementAmount, decrementAmount } from "../redux";

export const ProductComponent = (props) => {
  const [item] = useState({ ...props.product, amount: 1 });
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const updateShoppingCart = (item) =>
    shoppingCart.products.some((itemInCart) => itemInCart.id === item.id)
      ? dispatch(incrementAmount(item))
      : dispatch(addItem(item));

  const amountPerItem = shoppingCart.products.map(
    (productInCart) =>
      productInCart.title === item.title && productInCart.amount
  );

  return (
    <div>
      <h1>{props.product.title}</h1>
      <button onClick={() => updateShoppingCart(item)}>add to Cart</button>
      <button onClick={() => dispatch(decrementAmount(item))}>
        remove from Cart
      </button>

      <p>amount in shoppingcart: {amountPerItem}</p>
    </div>
  );
};

export default ProductComponent;

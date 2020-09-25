import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const totalAmount = shoppingCart.products.reduce(
    (sum, cur) => sum + cur.amount,
    0
  );

  const totalPrice = shoppingCart.products.reduce(
    (sum, cur) => sum + cur.price * cur.amount,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>total amount: {totalAmount}</p>
      <p>total price: {totalPrice} </p>
    </div>
  );
}

export default ShoppingCart;

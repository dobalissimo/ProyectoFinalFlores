import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-notification">{totalQuantity}</span>
    </div>
  );
}

export default CartWidget;

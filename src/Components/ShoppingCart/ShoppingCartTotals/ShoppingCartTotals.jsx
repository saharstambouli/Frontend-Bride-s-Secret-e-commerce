import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartTotals.css';
import { Link } from 'react-router-dom';

const CartTotals = ({ totalPrice, cart, handleTabClick, scrollToTop, handlePurchase,cartProducts }) => {
  const navigate = useNavigate();
  console.log("cart totals " ,cartProducts, totalPrice);

  const goToCheckout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Pass only serializable data to navigate
    navigate('/checkout');
  };
  

  return (
    
    <div className="shoppingBagTotal">
      <h3>Cart Totals</h3>
      <table className="shoppingBagTotalTable">
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <div className="shoppingBagTotalTableCheck">
                <p>Shipping to Al..</p>
                <p onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                  CHANGE ADDRESS
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <Link
        to="/checkout"
        state={{ cartProducts, totalPrice}}
      >
        <button disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartTotals;




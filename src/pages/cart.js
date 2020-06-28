import React, { Component } from 'react';
import ShopContext from '../context/shop-context';
import Navigation from '../components/navigation';
import './cart.css';

class CartPage extends Component {
  static contextType = ShopContext;

  render() {
    const { cart, removeProductFromCart } = this.context;
    return (
      <>
        <Navigation
          cartItemNumber={cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="cart">
          {cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    type="button"
                    onClick={removeProductFromCart.bind(this, cartItem.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default CartPage;

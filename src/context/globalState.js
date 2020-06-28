import React, { Component } from 'react';

import ShopContext from './shop-context';

class GlobalState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 'p1', title: 'React 16 Sticker + T-shirt', price: 29.99 },
        { id: 'p2', title: 'Vue.js T-shirt', price: 9.99 },
        { id: 'p3', title: 'Angular T-shirt', price: 8.99 },
        { id: 'p4', title: 'JS Notebook', price: 2.99 },
      ],
      cart: [],
    };
  }

  addProductToCart = (product) => {
    const { cart } = this.state;
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({ cart: updatedCart });
  };

  removeProductFromCart = (productId) => {
    const { cart } = this.state;
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({ cart: updatedCart });
  };

  render() {
    const { products, cart } = this.state;
    const { children } = this.props;
    return (
      <ShopContext.Provider
        value={{
          products,
          cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
        }}
      >
        {children}
      </ShopContext.Provider>
    );
  }
}

export default GlobalState;

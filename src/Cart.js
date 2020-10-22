import React from 'react'; 

function Cart({ cartItems }) { 

  function getCartTotal() {
    // let total = 0;

    // for (let cur of cartItems) {
    //   total += Number(cur.total);
    // }

    // return total.toFixed(2);

    return cartItems.reduce((total, cur) => total + Number(cur.total), 0);
  }


  return (
    <div>         
      <div>
        <h3>Cart Total</h3>
          <p>cart total : {Number(getCartTotal()).toFixed(2)}</p>
        {cartItems.map(cartItem => (
          <ul>
            <li>name : {cartItem.name}</li>
            <li>quantity : {cartItem.quantity}</li>
            <li>price : {cartItem.price}</li>
            <li>total : {cartItem.total}</li>
          </ul>
        ))}
        <button >Check Out</button>
      </div>
    </div>
  )
}

export default Cart;

import React from 'react';
import ListItem from './ListItem';



const Cart = (props) => { 
    // const {chips,drinks,candy} = props 
    // // const products = props.chips.concat(props.drinks, props.candy);
    // let x = props.reduce((a, b) => ({amount: a.amount + b.amount}))

    // let preSum = props.map(item => {
    //     return item.amount * item.price
    // })

    // let sum = preSum.reduce((a,b) => a + b , 0)

    return (
    
        <div>         
            <div>
                <div >Cart Total</div>
                {/* <div >${sum}</div> */}
                {props.cart.chips}
                <button >Check Out</button>
            </div>
        </div>
    )
}

export default Cart;
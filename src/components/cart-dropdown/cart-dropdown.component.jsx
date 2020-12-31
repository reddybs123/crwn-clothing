import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component.jsx';

const CartDropdown = ({cartItems}) => (

    <div className="cart-dropdown">

        <dic className="cart-items">

            {cartItems.map(cartItem => ( 
                <CartItem key={cartItem.id} item={cartItem}/>
            
            ))}            
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </dic>

    </div>
);


const mapStateToProps = ({cart: {cartItems}}) => ({cartItems})
export default connect(mapStateToProps) (CartDropdown);
    ;
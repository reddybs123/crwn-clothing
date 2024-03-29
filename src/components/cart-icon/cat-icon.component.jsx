import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import {toggleCartHidden}   from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = (toggleCartHidden) => (

    
    <div className="cart-icon" onClick={toggleCartHidden.toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">0</span>

        {console.log("type of toggelCartHidden",typeof(toggleCartHidden))}
        {console.log("toggelCartHidden", toggleCartHidden)}
    </div>
    
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);
import React from 'react';
import { View,Text } from 'react-native';
import Formcart from '../Components/Formcart';
import { Viewcontainer } from '../Css/Styles';
import {connect} from 'react-redux';
import {removeToCart,clearToCart,modifyCart} from "../Redux/Reducers/Actioncart";
const Cart = (props) => {
    return (
        <Viewcontainer>
           <Formcart {...props} />
            
        </Viewcontainer>
    )
}

export default connect( (state) => {
    return{
        listcart : state.cart,
        quantity_price: state.cart.reduce((total, item) => total + parseInt(item.qty * item.new_price) , 0)

        
    }
},{removeToCart,clearToCart,modifyCart})(Cart)

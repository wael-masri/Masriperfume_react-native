import React from 'react'
import { View,Text } from 'react-native'
import Formplaceorder from '../Components/Formplaceorder';
import { Viewcontainer } from '../Css/Styles';
import {clearToCart} from "../Redux/Reducers/Actioncart";
import { connect } from 'react-redux';
const Placeorder = (props) => {
    return (
        <Viewcontainer>
           <Formplaceorder {...props} />
            
        </Viewcontainer>
    )
}

export default connect((state) => {
    
    return { 
        arrayitem : state.cart,
        totalquantity: state.cart.reduce((total, item) => total + parseInt(item.qty) , 0),
        totalprice: state.cart.reduce((total, item) => total + parseInt(item.qty * item.new_price) , 0)
        
    }
   
   },{clearToCart} )(Placeorder)
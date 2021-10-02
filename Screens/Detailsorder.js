import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Formdetailsorder from '../Components/Formdetailsorder';
import { Viewcontainer } from '../Css/Styles';
const Detailsorder = ({route}) => {
    console.log(route.params)
    return (
        <Viewcontainer>
           <Formdetailsorder datadetails={route.params} />
        </Viewcontainer>
    )
}

export default Detailsorder

const styles = StyleSheet.create({})

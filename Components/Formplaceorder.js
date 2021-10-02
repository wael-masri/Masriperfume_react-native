import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import { Colors } from '../Css/Colors'
import { Mytextinput} from "./Mytextinput";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Formplaceorder = (props) => {
 const navigation = useNavigation();
 const [dataprofile ,setdataprofile] = useState([]);
    
    
           // get data from storage
    const getData = async () => {
        try {
           const jsonValue = await AsyncStorage.getItem('masriaccount')
           const datastorage =  JSON.parse(jsonValue);
           setdataprofile(datastorage);
            
           
          
        } catch(e) {
         return false
        }
      }
        useEffect(() => {
            getData();
        }, [])
    const placeordervalidation = yup.object().shape({
        name: yup
          .string()
          .matches(/(\w.+\s).+/, "Enter at least 2 names")
          .required("Full name is required"),
        phone: yup
          .string()
          .matches(/^[0-9]+$/, "Enter a valid phone number")
          .required("Phone number is required"),
        shippingorder: yup
        .string()
        .min(20, ({ min, value }) => `${min - value.length} characters to go`)
        .required("Shipping order is required"),
        ordernotes: yup
          .string()
          .min(20, ({ min, value }) => `${min - value.length} characters to go`)
          .required("Order notes is required"),
      });

 //send order to data base
 const formsub = async (values) => {
    if(props.arrayitem.length > 0){
      
     
      const neworder = {
          items : props.arrayitem,
          name : values.name,
          phone : values.phone,
          shippingorder: values.shippingorder,
          ordernotes: values.ordernotes,
          user_id : dataprofile._id
   
      }
   
       try {
         const res = await axios.post(
           "http://192.168.1.104:5000/api/orders/add",
           neworder
         );
         props.clearToCart();
         
         res && navigation.navigate("Home")
       } catch (err) {
         console.log(err);
       }
    }else{
        //alert("Please select items for buy..");
        alert('Please select items for buy..');
    }
    };














    return (
        <Formik
        initialValues={{ name: "", phone: "", shippingorder: "", ordernotes: "" }}
        onSubmit={formsub}
        validationSchema={placeordervalidation}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          
        <>
          <View style={styles.boxplaceorder}>
              <Text style={styles.textboxplaceorder}>
              You have chosen {props.totalquantity} of our products at a price of ${props.totalprice}.
              If you want to change, you can go back now.
              </Text>
              
          </View> 
          <TouchableOpacity style={styles.buttonplaceorder} onPress={handleSubmit}>
              <Text style={styles.textbuttonplaceorder}>Place order</Text>
          </TouchableOpacity>
          <View style={styles.line}></View> 
          <ScrollView>
          <Mytextinput
              placeholder="Full Name.."
              Icon="user"
              antdesign = "true"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              
            />
            {errors.name && touched.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
          
             <Mytextinput
              placeholder="Phone Number.."
              Icon="call"
              ionicons="true"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              
            />
             {errors.phone && touched.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
               <Mytextinput
              placeholder="Shipping Order.."
              Icon="local-shipping"
              materialicons = "true"
              onChangeText={handleChange("shippingorder")}
              onBlur={handleBlur("shippingorder")}
              value={values.shippingorder}
              multiline
              numberOfLines={3}
              
            />
             {errors.shippingorder && touched.shippingorder && (
              <Text style={styles.errorText}>{errors.shippingorder}</Text>
            )}
             <Mytextinput
              placeholder="Order Notes.."
              Icon="event-note"
              materialicons="true"
              onChangeText={handleChange("ordernotes")}
              onBlur={handleBlur("ordernotes")}
              value={values.ordernotes}
              multiline
              numberOfLines={3}
              
            />
             {errors.ordernotes && touched.ordernotes && (
              <Text style={styles.errorText}>{errors.ordernotes}</Text>
            )}
            </ScrollView>
          
        </>
        )}
        </Formik>
    )
}

export default Formplaceorder

const styles = StyleSheet.create({
    boxplaceorder:{
        backgroundColor:Colors.darklight,
        padding:5,

    },
    textboxplaceorder:{
        color:Colors.brown,
        letterSpacing:2,
        fontSize:15,
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: Colors.darklight,
        marginVertical: 10,
      },
      buttonplaceorder:{
        padding: 15,
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1,
        marginVertical: 10,
        height: 50,
    
      },
      textbuttonplaceorder:{
        color:Colors.brown,
        fontSize:18,
        textTransform:"uppercase",
      },
      errorText: {
        fontSize: 10,
        color: Colors.red,
      },
})

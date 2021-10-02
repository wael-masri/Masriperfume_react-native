import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View ,FlatList} from "react-native";
import { Colors } from "../Css/Colors";
import Cardboxcart from "./Cards/Cardboxcart";
const Formcart = (props) => {
  
 const navigation = useNavigation(); 
  
  
  
  
  //FOR FLATLIST
  const renderItem = ({ item }) => (
    <Cardboxcart item={item} {...props} />
  );
  
  
  
  //RUNNING
  return (
    <>
      <View style={styles.boxheadercart}>
        <Text style={styles.textheadercart}>My Cart</Text>
        <Text style={styles.textheadercart}>Total: ${props.quantity_price}</Text>
      </View>
      {props.listcart.length !== 0 && (<>
        <View style={styles.boxbuttonorder}>
          <TouchableOpacity style={styles.buttoncart} onPress={() => {
                  props.clearToCart();
                }}>
            <Text style={styles.textbuttoncart}>Empty Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttoncart}>
          <Text style={styles.textbuttoncart} onPress={() => navigation.navigate("Placeorder")}>Place Order</Text>
          </TouchableOpacity>
      </View>
      
      
      </>)}
      {props.listcart.length === 0 && (<>
        <View style={styles.boxbuttonorder}>
          <TouchableOpacity style={styles.buttoncart} disabled={true}>
            <Text style={styles.textbuttoncart}>Empty Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttoncart} disabled={true}>
          <Text style={styles.textbuttoncart}>Place Order</Text>
          </TouchableOpacity>
      </View></>)}
      
      <View style={styles.line}></View>
      
      {props.listcart.length === 0 && (
         <View style={styles.boxemptycart}>
         <Text style={styles.textemaptycart}>No items selected to cart</Text>
         </View>

      )}

      {props.listcart.length !== 0 && (<>
       
        
        <FlatList
          data={props.listcart}
          style={{}}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          
        />
        
         </>

      )}

     
      

      
      
    </>
  );
};

export default Formcart;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.darklight,
    marginVertical: 10,
  },
  boxheadercart: {
    backgroundColor: Colors.darklight,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    
  },
  textheadercart: {
    fontSize: 20,
    color: Colors.brown,
    fontWeight: "bold",
  },
  boxbuttonorder:{
      flexDirection:"row",
      justifyContent:"space-between",

  },
  buttoncart:{
    padding: 15,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    marginVertical: 5,
    height: 35, 
  },
  textbuttoncart:{
    color: Colors.white,
    textTransform: "uppercase",
    
  },
  textemaptycart:{
    color:Colors.blacklight,
    fontSize:18,
    letterSpacing:2,
    textTransform:"uppercase",
  },
  boxemptycart:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
  
});

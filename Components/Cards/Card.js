import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Colors } from "../../Css/Colors";

export default function Carditem({ dataitem}) {
  var DB = "http://192.168.1.104:5000/Images/";
  const navigation = useNavigation();
  return (
   
      <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{
            uri: `${DB + dataitem.image_link}` ,
          }}
          
        />
        <View style={styles.brands}>
          <Text style={styles.brands_text}>{dataitem.brand}</Text>
        </View>
        <View style={styles.desc_container}>
         
            <Text style={styles.card_title}>{dataitem.title}</Text>
            
          
          <View style={styles.text_container}>
          <Text style={styles.card_qunatity}>{dataitem.quantity} ML</Text>
          <Text style={styles.card_price}>${dataitem.new_price}</Text>
          </View >
        </View>
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate("Singleitem",dataitem)}>
            <Text style={styles.appButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
   
  );
}

const styles = StyleSheet.create({

  card_template: {
    width: '100%',
    height: 250,
    
    
  },
  card_image: {
    width: '100%',
    height: 150,
    borderRadius: 0,
  },
  text_container: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%',
  },
  desc_container: {
    position: "relative",
    width: '100%',
    height: 55,
    bottom: 0,
    padding: 3,
    backgroundColor: "rgba(0,0,0, 0.5)",
   
  },
  brands: {
    position: "absolute",
    
    
    top: 0,
    
    
    
    backgroundColor: Colors.black,
  },
  card_title: {
    color: Colors.white,
    fontSize:11,
    height:25
    
  },
  card_price: {
    color: Colors.darklight,
    fontWeight:"700"
  },
  card_qunatity:{
    color: Colors.darklight,
  },
  brands_text: {
    color: Colors.white,
    marginHorizontal:10,
    marginVertical:1,
    alignItems: "center",
    justifyContent:"center"
  },
  //button
  appButtonContainer: {
    position: "relative",
    elevation: 8,
    marginTop: -5,
    backgroundColor: Colors.black,
    borderRadius: 0,
    paddingVertical: 7,
    paddingHorizontal:7,
    marginHorizontal: 10,
    
    
  },
  appButtonText: {
    fontSize: 15,
    color: Colors.brown,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    
  },
});

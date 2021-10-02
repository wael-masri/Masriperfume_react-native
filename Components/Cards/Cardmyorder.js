import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Colors } from "../../Css/Colors";
import { Ionicons, FontAwesome } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/core";
const Cardmyorder = ({dataorder}) => {
  const navigation = useNavigation();
    return (
        <View
        style={styles.cardmyorder}
      >
        <View
          style={styles.boxdate}
        >
          <Text style={{ color: "#fff",fontSize:13 }}>{new Date(dataorder.createdAt).toDateString()}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flex: 2,paddingHorizontal:4 }}>
            <Text style={styles.titleshipping}>Shipping Order</Text>
            <Text numberOfLines = { 1 } style={{marginVertical:2}}>{dataorder.shippingorder}</Text>
            
          </View>

          <View
            style={styles.boxdescorder}
          >
              <TouchableOpacity onPress={() => navigation.navigate("detailsorder",dataorder)}>
                <View style={{ flexDirection: "row" }}>
                <Text style={styles.buttondetails}>Details </Text>
                <FontAwesome
                    name="long-arrow-right"
                    color={Colors.white}
                    size={20}
                />
                </View>

              </TouchableOpacity>
           
          </View>
        </View>
      </View>
    )
}

export default Cardmyorder

const styles = StyleSheet.create({
    titleshipping:{
        color:Colors.brown,
        letterSpacing:2,
    },
    buttondetails:{
        color:Colors.white,
        letterSpacing:1,
        
        
       
    },
    boxdate :{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",

    },
    boxdescorder: {
        backgroundColor: Colors.brown,
              alignItems: "flex-end",
              flex: 1,
              justifyContent: "center",
    },
    cardmyorder:{
        height: 70,
            flexDirection: "row",
            backgroundColor: Colors.darklight,
            marginVertical:5,
      }
})

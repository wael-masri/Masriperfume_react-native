import React from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";
import { Colors } from "../Css/Colors";
import { Ionicons, AntDesign } from "react-native-vector-icons";
const Formdetailsorder = ({datadetails}) => {
 
 
   const renderitem = ({item}) => (
    <View
    style={styles.boxorder}
  >
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={styles.titleboxorder}
      >
        {item.title}
      </Text>
    </View>
    <View
      style={styles.descorderbox}
    >
      <View>
        <Text>{item.quantity} ML</Text>
      </View>

      <Text>{item.qty} Peaces</Text>
      <Text>${item.new_price}</Text>
    </View>
  </View>
   )
 
 
 
 
 
 
  return (
    <>
      <View style={styles.boxheadermyorder}>
        <Text style={styles.textheadermyorder}>Details</Text>
        <Text style={styles.textheadermyorder}>{new Date(datadetails.createdAt).toDateString()}</Text>
      </View>
      <View>
      <View style={styles.boxdescorder}>
      <View style={{ flexDirection:"row"}}>
          <Ionicons name="call" size={15} color={Colors.brown} />
          <Text style={styles.datadetails}>{datadetails.phone}</Text>
        </View>
      </View>
       
        <Text style={styles.subtitledeatils}>Full Name</Text>
        <Text style={styles.datadetails}>{datadetails.name}</Text>
        <Text style={styles.subtitledeatils}>Shipping Order</Text>
        <Text style={styles.datadetails}>{datadetails.shippingorder}</Text>
        
        
        <Text style={styles.subtitledeatils}>Order Notes</Text>
        <Text style={styles.datadetails}>{datadetails.ordernotes}</Text>
      </View>
      <View style={styles.line}></View>
      <FlatList
          data={datadetails.items}
          style={{}}
          renderItem={renderitem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          
        />
      
     
    </>
  );
};

export default Formdetailsorder;

const styles = StyleSheet.create({
  boxheadermyorder: {
    backgroundColor: Colors.darklight,
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  textheadermyorder: {
    letterSpacing: 2,
    fontSize: 18,
    color: Colors.brown,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.darklight,
    marginVertical: 10,
  },
  descorderbox:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleboxorder:{
    color: Colors.black,
    letterSpacing: 1,
    fontWeight: "700",
    fontSize: 18,
  },
  boxorder:{
    height: 60,
     backgroundColor: "silver",
      paddingHorizontal: 5,
      marginVertical:5,
  },
  subtitledeatils:{
      letterSpacing:1,
      fontSize:15,
      fontWeight:"700",
      color:Colors.brown,
      marginVertical:5,
  },
  datadetails:{
      letterSpacing:1,
      color:Colors.blacklight,
      fontSize:14
  },
  boxdescorder: {
    
          alignItems: "flex-end",
         
          justifyContent: "center",
},
});

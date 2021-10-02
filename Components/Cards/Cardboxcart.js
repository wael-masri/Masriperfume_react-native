import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../Css/Colors";
import { Ionicons, AntDesign } from "react-native-vector-icons";

const Cardboxcart = ({item,...props}) => {
  var DB = "http://192.168.1.104:5000/Images/";
  return (
    <>
      <View style={styles.cardbox}>
        <View style={{ flex: 1 }}>
          <Image
           source={{
            uri: `${DB + item.image_link}` ,
          }}
            style={styles.imagecard}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.boxtitle}>
              <TouchableOpacity style={styles.iconclose} onPress={() => {
                              props.removeToCart(item._id);
                            }} >
              <AntDesign name="closecircleo"  size={25} color={Colors.brown}   />
              </TouchableOpacity>
           
            <Text style={styles.titlecard}>{item.title}</Text>
          </View>

          <View style={styles.boxdescriptioncard}>
            <Text style={styles.desctext}>{item.quantity} ML</Text>
            <Text style={styles.desctext}>{item.qty} peaces</Text>
            <Text style={styles.desctext}>${item.new_price * item.qty}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Cardboxcart;

const styles = StyleSheet.create({
  cardbox: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    maxHeight: 90,
    marginVertical: 10,
  },
  imagecard: {
    width: "100%",
    height: "100%",
  },
  boxtitle: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 10,
    overflow: "hidden",
  },
  iconclose: {
    position: "absolute",
    right: 3,
    top: 3,
   
  },
  titlecard: {
    fontSize: 18,
    marginTop: 20,
  },
  boxdescriptioncard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flex: 1,
  },
  desctext: {
    color: Colors.blacklight,
  },
});

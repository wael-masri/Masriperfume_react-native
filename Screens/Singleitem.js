import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  FlatList,
} from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";

import { Colors } from "../Css/Colors";
import { SocialIcon } from "react-native-elements";
import { addToCart, removeToCart } from "../Redux/Reducers/Actioncart";
import { connect } from "react-redux";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import Carouselitem from "../Components/Carousel";
import { useNavigation } from "@react-navigation/core";
const Singleitem = ({ route, ...props }) => {
  const navigation = useNavigation();
  var DB = "http://192.168.1.104:5000/Images/";
  const [datamyorders, setDatamyorders] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);
  const [piece, setpiece] = useState("Piece");

  //GET DATA FROM DATABASE
  useEffect(() => {
    getItems();
  }, []);

  // increament quantity
  const inc = () => {
    let qty = counter + 1;
    setCounter(qty);
    setpiece("Pieces");
  };

  // increament quantity
  const dec = () => {
    if (counter > 1) {
      let qty = counter - 1;
      setCounter(qty);
     if(qty === 1){
      setpiece("Piece"); 
     }
    }
  };

  // if repeat order same info
  var istrue = false;
  const added = (single, counter) => {
    props.itemcartforexist.map((item2) => {
      if (item2.title === single.title) {
        istrue = true;
      }
    });
    if (istrue) {
      console.log("not added");
    } else {
      console.log(" added");
      //single.push({ quantity:12})
      let varia = { ...single, qty: counter };
      // console.log(" added",varia);
      props.addToCart(varia);
    }
  };
  var isbutton = false;
  const addbutton = (single, counter, _id) => {
    props.itemcartforexist.map((item2) => {
      if (item2.title === single.title) {
        isbutton = true;
      }
    });
    if (isbutton) {
      return (
        <>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => props.removeToCart(_id)}
          >
            <Text style={styles.appButtonText}>REMOVE FROM CART</Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 5 }}>
            This item added to cart, to modify click remove to cart !
          </Text>
        </>
      );
    } else {
      return (
        <>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => {
              added(single, counter);
            }}
          >
            <Text style={styles.appButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </>
      );
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.104:5000/api/posts/?brand=${route.params.brand}`
      );
      const json = await response.json();
      setDatamyorders(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //button inc and dec
  const buttonincdec = (counter, single) => {
    props.itemcartforexist.map((item2) => {
      if (item2.title === single.title) {
        isbutton = true;
      }
    });
    if (isbutton) {
      return (
        <View style={styles.qty}>
          <Text> {counter + " " + piece}</Text>
        </View>
      );
    } else {
      return (
        <>
          <View style={styles.qty}>
            <TouchableOpacity onPress={() => dec()}>
              <MaterialCommunityIcons
                name="minus-box"
                size={35}
                color={Colors.brown}
              />
            </TouchableOpacity>
            <Text style={styles.text_qty2}>{counter+" "+piece}</Text>
            <TouchableOpacity onPress={() => inc()}>
              <MaterialCommunityIcons
                name="plus-box"
                size={35}
                color={Colors.brown}
              />
            </TouchableOpacity>
          </View>
        </>
      );
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageHeaderScrollView
        maxHeight={350}
        minHeight={90}
        headerImage={{
          uri: `${DB + route.params.image_link}`,
        }}
        renderForeground={() => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <Ionicons
                name="md-chevron-back"
                size={35}
                color={Colors.brown}
                style={styles.iconback}
              />
            </View>
          </TouchableOpacity>
        )}
      >
        <View>
          <TriggeringView onHide={() => console.log("text hidden")}>
            <View style={styles.overview}>
              <Text style={styles.text_overview1}>OverView</Text>
              <Text style={styles.text_overview2}>
                <MaterialCommunityIcons name="heart" size={20} /> 200
              </Text>
            </View>
            <View style={styles.brand}>
              <Text style={styles.text_brand}>{route.params.brand}</Text>
              <Text style={styles.quantity}>{route.params.quantity} ML</Text>
            </View>
            <View>
              <Text style={styles.text_title}>{route.params.title}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.text_description}>
                {route.params.description}
              </Text>
            </View>
            {buttonincdec(counter, route.params)}
            <View>
              <Text style={styles.text_price}>
                ${route.params.new_price * counter}
              </Text>
            </View>
            <View style={styles.image_payment_view}>
              <Image
                source={require("../assets/Images/payment.png")}
                style={styles.image_payment}
              />
            </View>

            {addbutton(route.params, counter, route.params._id)}

            <Text style={styles.titlerelated}>Related items</Text>

            <Carouselitem datafetch={datamyorders} />
            <View style={{ marginTop: 20 }}>
              <SocialIcon
                title="Sign In With Facebook"
                button
                type="facebook"
                style={{ borderRadius: 0 }}
              />

              <SocialIcon
                title="Sign In With Twitter"
                button
                type="twitter"
                style={{ borderRadius: 0 }}
              />

              <SocialIcon
                title="Sign In With Instagram"
                button
                type="instagram"
                style={{ borderRadius: 0 }}
              />
            </View>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  card_image: {
    width: "100%",
    height: 400,
    borderRadius: 0,
  },
  overview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  text_overview1: {
    fontSize: 20,
    letterSpacing: 2,
    color: Colors.brown,
  },
  text_overview2: {
    fontSize: 20,

    color: Colors.brown,
  },
  description: {
    padding: 5,
  },
  text_description: {
    fontSize: 18,
    letterSpacing: 1,
    color: Colors.blacklight,
    textAlign: "center",
  },
  brand: {
    backgroundColor: Colors.black,

    alignItems: "center",
  },
  text_brand: {
    color: Colors.white,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    marginVertical: 10,
    textTransform: "uppercase",
  },
  text_title: {
    fontSize: 22,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 25,
  },
  text_price: {
    fontSize: 22,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "700",
    marginVertical: 10,
    color: Colors.brown,
  },
  quantity: {
    position: "absolute",
    right: 0,
    bottom: -20,
    color: Colors.blacklight,
  },
  qty: {
    flexDirection: "row",
    alignSelf: "center",
  },

  text_qty2: {
    padding: 5,
    fontSize: 20,
    marginHorizontal: 10,
  },

  image_payment_view: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  //button
  appButtonContainer: {
    elevation: 25,
    marginTop: 5,
    backgroundColor: Colors.black,
    borderRadius: 0,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.brown,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  map: {
    width: Dimensions.get("window").width - 8,
    height: 200,
    marginVertical: 30,
    marginHorizontal: 4,
  },
  titlerelated: {
    textTransform: "uppercase",
    marginVertical: 30,
    textAlign: "center",
    fontSize: 18,
    color: Colors.brown,
    letterSpacing: 2,
  },
  iconback: {
    marginTop: 50,
    marginLeft: 15,
  },
});
export default connect(
  (state) => {
    return {
      itemcartforexist: state.cart,
    };
  },
  { addToCart, removeToCart }
)(Singleitem);

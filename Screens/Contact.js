import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Viewcontainer } from "../Css/Styles";
import Message from "../Components/Message";
import Detailscontact from "../Components/Detailscontact";

const Contact = () => {
  // const height = Dimensions.get("window").height;
  

  //RUNNING
  return (
    <>
      <ScrollView>
        <Viewcontainer>
          <Detailscontact />
         
        </Viewcontainer>
        
      </ScrollView>
      <Message />
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({});

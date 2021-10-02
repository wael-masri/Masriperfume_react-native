import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Mytextinput } from "../Components/Mytextinput";
import { Colors } from "../Css/Colors";
import { Viewcontainer } from "../Css/Styles";
import { SocialIcon } from "react-native-elements";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
const Subscriber = (props) => {


  const placeordervalidation = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
   
  });

   //send order to data base
 const formsub = async (values ,{ resetForm }) => {
  try {
    const res = await axios.post(
      "http://192.168.1.104:5000/api/subscribes/add",
      values
    );
    alert("Email has been sent..", "THANK YOU");
    res && resetForm();
  } catch (err) {
    console.log(err);
  }
  };


    
  return (
    <Viewcontainer>
      <View style={styles.boxheadersub}>
        <Text style={styles.textheadersub}>Subscribers</Text>
        <Text style={styles.textheadersub}>550</Text>
      </View>
      <View style={styles.line}></View>
      <Text
        style={{
          color: Colors.brown,
          letterSpacing: 2,
          fontSize: 20,
          fontWeight: "700",
          marginVertical: 10,
        }}
      >
        Our Mission
      </Text>
      <Text
        style={{
          color: Colors.blacklight,
          letterSpacing: 1,
          fontSize: 18,
          marginVertical: 10,
        }}
      >
        To share our true passion for perfumes and people and offer the most
        knowledgeable fragrance experience at discounted prices.
      </Text>
      <Formik
        initialValues={{ email: "" }}
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
        <Mytextinput
        placeholder="Email.."
        Icon="alternate-email"
        materialicons="true"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        value={values.email}
        />
         {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
        <TouchableOpacity style={styles.appButtonsub} onPress={handleSubmit}>
          <Text style={styles.appButtonTextsub}>Subscribe</Text>
        </TouchableOpacity>
          </>)}
        </Formik>
      
      <View style={{ marginTop: 40 }}>
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
    </Viewcontainer>
  );
};

export default Subscriber;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.darklight,
    marginVertical: 10,
  },
  boxheadersub: {
    backgroundColor: Colors.darklight,
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  textheadersub: {
    letterSpacing: 2,
    fontSize: 18,
    color: Colors.brown,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  appButtonsub: {
    elevation: 25,
    marginTop: 5,
    backgroundColor: Colors.black,
    borderRadius: 0,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  appButtonTextsub: {
    fontSize: 18,
    color: Colors.brown,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  errorText: {
    fontSize: 10,
    color: Colors.red,
  },
});

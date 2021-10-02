import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchdata } from "../Redux/Reducers/Fetchindata/Index";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mytextinput } from "../Components/Mytextinput";
import axios from "axios";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Line } from "../Css/Styles";

import { Colors } from "../Css/Colors";

import {
  Octicons,
  Fontisto,
  Ionicons,
  AntDesign,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/core";
const Login = ({ ...props }) => {
  const navigation = useNavigation();
  //validation for form
  const validate = Yup.object({
    username: Yup.string().required("Required !"),

    password: Yup.string().required("Required !"),
  });
  //send register to data base
  const formsub = async (values, { resetForm }) => {
    try {
      const res = await axios.post(
        "http://192.168.1.104:5000/api/users/login",
        values
      );
      // const jsonValue = JSON.stringify(res.data);
      await AsyncStorage.setItem("masriaccount", JSON.stringify(res.data));
      res && res.data.username && navigation.navigate("Home");
      res && res.data.username && resetForm();
      res && res.data.message && alert("username and password not correctly..");
      res && res.data.message && resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    props.fetchdata();
  }, []);
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ScrollView>
    <View style={styles.container}>
     
      <View style={styles.innerlogo}>
        <Image
          style={styles.imagelogo}
          resizeMode="cover"
          source={require("./../assets/Images/logo2.png")}
        />
        <Text style={styles.titlelogin}>MASRI PERFUME</Text>
      </View>
      <View style={styles.innerformlogin}>
        <Text style={styles.subtitlelogin}>
        Welcome! Login to get amazing discounts and offers only for you.
        </Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validate}
        onSubmit={formsub}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched,
        }) => (
          <>
            <Mytextinput
              placeholder="Enter your username.."
              Icon="user"
              antdesign="true"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {errors.username && touched.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <Mytextinput
              placeholder="Enter your password.."
              Icon="unlock"
              antdesign="true"
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
             <Line />
            <TouchableOpacity style={styles.buttonlogin} onPress={handleSubmit}>
              <Text style={styles.textbuttonlogin}>Login</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
              style={styles.buttonlogin}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.textbuttonlogin}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      </View>
     
    </View>
    </ScrollView>
  );
};

export default connect(null, { fetchdata })(Login);
const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: Colors.red,
  },
  imagelogo: {
    marginTop: 30,

    width: 286,
    height: 104,
  },
  container: {
    padding: 25,
    flex: 1,
  },
  buttonlogin: {
    padding: 15,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    marginVertical: 10,
    height: 50,
  },
  textbuttonlogin: {
    color: Colors.brown,
    fontSize: 18,
    textTransform: "uppercase",
  },
  titlelogin: {
    marginVertical: 20,
    fontWeight: "700",
    fontSize: 25,
    color: Colors.brown,
    textAlign: "center",
    letterSpacing: 2,
  },
  innerlogo:{
   
    borderRadius:2,
    alignItems:"center",
    
  },
  innerformlogin:{
   

  },
  subtitlelogin:{
    textAlign:"center",
    letterSpacing:2,
    color:Colors.blacklight,
    marginVertical:28,
    fontSize:18,
  }
});

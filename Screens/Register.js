import React, { useState } from "react";
import * as Yup from "yup";
import { Formik} from "formik";
import axios from "axios";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
//colors
import { Colors } from "../Css/Colors";
import { Mytextinput } from "../Components/Mytextinput";
// icon

import {
  Octicons,
  Fontisto,
  Ionicons,
  AntDesign,
} from "react-native-vector-icons";
import { Line } from "../Css/Styles";
const Register = (props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);

  //validation for form
  const validate = Yup.object({
    username: Yup.string().required("Required !"),
    email: Yup.string().email("Email is invalid").required("Required !"),
    password: Yup.string().required("Required !"),
    confirm: Yup.string()

      .oneOf([Yup.ref("password"), null], "Passwords must match")

      .required("Required !"),
  });
  //send register to data base
  const formsub = async (values) => {
    console.log(values);
    try {
      const res = await axios.post(
        "http://192.168.1.104:5000/api/users/register",
        values
      );
      res && props.navigation.navigate("Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View style={{ padding: 25, flex: 1, marginTop: 20 }}>
       
        <Text
          style={{
            color: Colors.brown,
            letterSpacing: 2,
            fontSize: 25,
            fontWeight: "700",
            marginVertical: 0,
          }}
        >
          Sign Up
        </Text>
        <Text style={styles.subtitlesignup}>Create your account </Text>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirm: "",
          }}
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
            <View>
              <Mytextinput
                placeholder="Enter username.."
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
                placeholder="Enter your email.."
                Icon="alternate-email"
                materialicons="true"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Mytextinput
                placeholder="Enter your password.."
                Icon="lock"
                antdesign="true"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <Mytextinput
                Icon="lock"
                antdesign="true"
                placeholder="Reapet your password.."
                onChangeText={handleChange("confirm")}
                onBlur={handleBlur("confirm")}
                value={values.confirm}
                secureTextEntry={hidePassword2}
                isPassword2={true}
                hidePassword2={hidePassword2}
                setHidePassword2={setHidePassword2}
              />
              {errors.confirm && touched.confirm && (
                <Text style={styles.errorText}>{errors.confirm}</Text>
              )}

              <Line />
              <TouchableOpacity
                style={styles.buttonsignup}
                onPress={handleSubmit}
              >
                <Text style={styles.textbuttonsignup}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: Colors.red,
  },
 
  buttonsignup: {
    padding: 15,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    marginVertical: 10,
    height: 50,
  },
  textbuttonsignup: {
    color: Colors.brown,
    fontSize: 18,
    textTransform: "uppercase",
  },
  subtitlesignup:{
    letterSpacing:2,
    color:Colors.blacklight,
    fontSize:17,
    marginTop:15,

  }
});

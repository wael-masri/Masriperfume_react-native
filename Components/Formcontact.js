import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../Css/Colors";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { Mytextinput} from "./Mytextinput";
const Formcontact = () => {
 
  const signUpValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, "Enter at least 2 names")
      .required("Full name is required"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Enter a valid phone number")
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Please enter valid email")

      .required("Email is required"),
    message: yup
      .string()
      .min(20, ({ min, value }) => `${min - value.length} characters to go`)
      .required("Message is required"),
  });

  //send register to data base
  const formsub = async (values, { resetForm }) => {
    try {
      const res = await axios.post(
        "http://192.168.1.104:5000/api/messages/add",
        values
      );
      alert("Message has been sent..", "THANK YOU");
      res && resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Text style={styles.titlemodal}>We are waiting for your feedback</Text>
      
      <Formik
        initialValues={{ name: "", phone: "", email: "", message: "" }}
        onSubmit={formsub}
        validationSchema={signUpValidationSchema}
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
              placeholder="Full Name.."
              Icon="user"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              antdesign="true"
            />
            {errors.name && touched.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <Mytextinput
              placeholder="Phone.."
              Icon="phone"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              antdesign="true"
            />
            {errors.phone && touched.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}

            <Mytextinput
              placeholder="Email.."
              Icon="mail"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              antdesign="true"
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Mytextinput
              placeholder="Message.."
              Icon="message1"
              onChangeText={handleChange("message")}
              onBlur={handleBlur("message")}
              multiline
              numberOfLines={3}
              value={values.message}
              antdesign="true"
            />
            {errors.message && touched.message && (
              <Text style={styles.errorText}>{errors.message}</Text>
            )}
            <View style={styles.line}></View>

            <TouchableOpacity style={styles.buttonsend} onPress={handleSubmit}>
              <Text style={styles.textbuttonsend}>Send Message</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </>
  );
};

export default Formcontact;

const styles = StyleSheet.create({
  titlemodal: {
    color: Colors.brown,
    textAlign: "center",
    marginTop: 40,
    fontSize: 22,
    letterSpacing: 2,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.darklight,
    marginVertical: 10,
  },
  buttonsend: {
    padding: 15,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    marginVertical: 10,
    height: 60,
  },
  textbuttonsend: {
    color: Colors.white,
    fontSize: 17,
  },
  errorText: {
    fontSize: 10,
    color: Colors.red,
  },
});

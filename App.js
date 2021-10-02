import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Stacknav from "./Navigations/Stacknavigation.js";
import { Provider,connect } from "react-redux";

import { store } from "./Redux/Store/Index";
const App = () => {
 

 


  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor="#111111" barStyle="light-content" />
      <Stacknav />
    </NavigationContainer>
    </Provider>
  );
}

export default App;
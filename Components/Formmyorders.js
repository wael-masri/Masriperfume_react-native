import React,{useEffect,useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity,FlatList } from "react-native";
import { Colors } from "../Css/Colors";
import Cardmyorder from "./Cards/Cardmyorder";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const Formmyorders = (props) => {
  const [dataprofile ,setdataprofile] = useState([]);
  const [datamyorders ,setDatamyorders] = useState([]);
    
    
   
      const fetch = async () => {
      const jsonValue = await AsyncStorage.getItem('masriaccount')
      const datastorage =  JSON.parse(jsonValue);
      setdataprofile(datastorage);
      const res = await axios.get(`http://192.168.1.104:5000/api/orders/?user_id=${datastorage._id}`);
      setDatamyorders(res.data);
     
    };
        useEffect(() => {
          fetch();
        }, [])

    //FOR FLATLIST
  const renderItem = ({ item }) => (
    <>
       <Cardmyorder dataorder={item} />
    </>
  );



  return (
    <>
     <View style={styles.boxheadermyorder}>
     <Text style={styles.textheadermyorder}>My Orders</Text>
     <Text style={styles.textheadermyorder}>List</Text>
     </View>
     <View style={styles.line}></View>
     {datamyorders.length === 0 && (
         <View style={styles.boxemptycart}>
         <Text style={styles.textemaptycart}>Not yet ordered from our store !</Text>
         </View>

      )}
          {datamyorders.length !== 0 && ( <FlatList
          data={datamyorders}
          style={{}}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          
        />)
          }
    
    
    </>
  );
};

export default Formmyorders;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.darklight,
    marginVertical: 10,
  },
  boxheadermyorder:{
    backgroundColor: Colors.darklight,
    height:50,
    justifyContent:"space-between",
    paddingHorizontal:5,
    flexDirection:"row",
    alignItems: "center",
  },
  textheadermyorder:{
   letterSpacing:2,
   fontSize:18,
   color:Colors.brown,
   fontWeight:"700",
   textTransform:"uppercase",
  },
  textemaptycart:{
    color:Colors.blacklight,
    fontSize:18,
    letterSpacing:2,
    textTransform:"uppercase",
  },
  boxemptycart:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});

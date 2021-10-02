import React,{useEffect} from "react";
import { View,Text, FlatList,TouchableOpacity,StyleSheet } from 'react-native'
import { Colors } from "../Css/Colors";

const Scrollcategories = ({tab,finddatabycategory}) => {

  

    const [ selectedtab , setSelectedtab] = React.useState("");

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() =>{
            setSelectedtab(item.name);
            finddatabycategory(item.name);
        } }>
            <View style={[ styles.pill ,{backgroundColor: selectedtab === item.name ? Colors.brown : Colors.black}]}>
                <Text style={[{color: selectedtab === item.name ? Colors.white : Colors.brown }]}>{item.name}</Text>
            </View>
        </TouchableOpacity>
       
      );





    return (
        <FlatList
            data={tab}
            keyExtractor={(item,index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor:Colors.darkgrey,flexGrow:0}}
            contentContainerStyle={{padding:15}}
            renderItem={renderItem}
           
           />
    )
}

export default Scrollcategories

const styles = StyleSheet.create({
    pill : {
     alignItems:"center",
     flexGrow:0,
     padding:10,
     marginHorizontal:6,
     width:100
 
 
    },
    pilltext : {
      fontWeight: "bold",

    }
   });

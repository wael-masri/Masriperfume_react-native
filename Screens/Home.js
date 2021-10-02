import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Scrollcategories from "../Components/Scrollcategories";
import SearchBar from "../Components/SearchBar/index";
import { Colors } from "../Css/Colors";
import { connect } from "react-redux";
import { TextTitle, Viewcontaineritems } from "../Css/Styles";
import Carditem from "../Components/Cards/Card";

const Home = (props) => {
  
  const [isLoading, setLoading] = useState(true);
  const [datacategories, setDatacategories] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState("");
  const [title, settitle] = useState("all brands");
  //GET DATA CATEGORIES TO SCROLLCATBAR
  const getcategories = async () => {
    try {
      const response = await fetch("http://192.168.1.104:5000/api/categories/");
      const json = await response.json();
      setDatacategories(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    setfilterData(props.listitems.data);
    setmasterData(props.listitems.data);
    getcategories();
  }, []);
  
  //FOR FLATLIST
  const renderItem = ({ item }) => (
    <View style={styles.inneritem}>
      <Carditem dataitem={item} />
    </View>
  );

  // FUNCTION SCROLL CATEGORIES BAR 
  const finddatabycategory = (name) => {
    const datainput = masterData.filter((item) => item.brand === name)
    settitle(name)
    setfilterData(datainput);
  }

  // SERCH ITEM BY TITLE 
  const serachfilter = (text) => {
    if (text) {
      const newdata = masterData.filter((item) => {
        const itemdata = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();

        const textdata = text.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
      setfilterData(newdata);
      setsearch(text);
    } else {
      setfilterData(masterData);
      setsearch(text);
    }
  };
  

  //RUNNING
  return (
    <>
      <Scrollcategories tab={datacategories} finddatabycategory={finddatabycategory} />

      <View style={{ backgroundColor: Colors.darkgrey }}>
        <SearchBar search={search} serachfilter={serachfilter} />
      </View>

      <Viewcontaineritems>
        <TextTitle>{title}</TextTitle>
        <FlatList
          data={filterData}
          style={{}}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
      </Viewcontaineritems>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.brown} />
      </View>
           */}
    </>
  );
};

const styles = StyleSheet.create({
  inneritem: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default connect((state) => {
  return {
    listitems: state.items,
  };
})(Home);

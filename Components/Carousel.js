import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Carditem from "./Cards/Card";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");
const Carouselitem = ({ datafetch }) => {
  const carouselRef = React.createRef();
  const [activeIndex, setActivateIndex] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Carditem dataitem={item} />
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          data={datafetch}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 110}
          renderItem={renderItem}
          useScrollView
          onSnapToItem={(index) => setActivateIndex(index)}
          activeSlideAlignment="center"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  item: {
    width: screenWidth - 110,
    height: screenWidth - 110,

    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
export default Carouselitem;

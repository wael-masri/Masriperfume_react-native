import React from 'react';

import {Dimensions, Animated} from 'react-native';
import { Colors } from '../../Css/Colors';
import {Container, Input, BoxButtonSearch, SearchIcon} from './styles';

export default function SearchBar({search,serachfilter}) {
  const animation = new Animated.Value(60);
  const {width} = Dimensions.get('window');

  function onSearch() {
    Animated.spring(animation, {
      toValue: width,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container style={{width: animation}}>
      <Input autoFocus
      placeholder="Search item.."
      placeholderTextColor={Colors.darklight}
      value={search}
      onChangeText={ (text) => serachfilter(text)}
      
      />
      <BoxButtonSearch onPress={onSearch}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
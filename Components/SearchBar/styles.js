import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, Animated} from 'react-native';
import { Colors } from '../../Css/Colors';

export const Container = styled(Animated.View)`
  width: 100px;
  height: 60px;
  background-color: #111111;
  border-radius: 0px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-right: 60px;
  margin-left: 0px;
  padding-left: 15px;
  color: #fff;
  background-color: ${Colors.black};
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color:${Colors.brown};
  position: absolute;
  right: 0px;
  border-radius: 0px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  color: #111111;
  font-size: 25px;
`;
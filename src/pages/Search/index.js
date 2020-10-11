import React from 'react';
import { View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

// import { Container } from './styles';

const Search = () => {
  return <View />;
}

Search.navigationOptions = {
    title: "Buscar",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" size={22} color={tintColor} />
    ),
  };

export default Search;
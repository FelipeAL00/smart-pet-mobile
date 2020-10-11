import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// import { Container } from './styles';

const Order = () => {
  return <View />;
};

Order.navigationOptions = {
  title: "Pedidos",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="box" size={25} color={tintColor} />
  ),
};

export default Order;

import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Carrossel from "./Carrossel";
import Produtos from "./Produtos";
import carrosselImage from "../../assets/imgCarrossel.jpg";
import Avaliado from "./Avaliado";

import { Container, List } from "./styles";

import data from "../../data/data";

function Home() {
  return (
    <Container>
      <Produtos />
      <Carrossel image={carrosselImage} />
      <List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <Avaliado item={item} />}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={30} color={tintColor} />
  ),
};

export default Home;

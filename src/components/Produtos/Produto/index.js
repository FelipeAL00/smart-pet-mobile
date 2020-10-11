import React from "react";
import { View } from "react-native";

import { Container, Description, Box, Image } from "./styles";

function Produto({ description, img }) {
  return (
    <Box>
      <Container>
        <Image source={img ? img : ""}/> 
      </Container>
      <Description>{description ? description : ""}</Description>
    </Box>
  );
}

export default Produto;

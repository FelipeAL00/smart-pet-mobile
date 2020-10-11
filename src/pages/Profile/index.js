import React from 'react';
import { View } from 'react-native';
import Icon from "react-native-vector-icons/Feather";


// import { Container } from './styles';

const Profile = () => {
  return <View />;
}

Profile.navigationOptions = {
    title: "Perfil",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="settings" size={25} color={tintColor} />
    ),
  };

export default Profile;
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Andamento from "./pages/Order/Andamento";
import Finalizado from "./pages/Order/Finalizado";
import Settings from "./pages/Profile";

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),

        App: createBottomTabNavigator(
          {
            Home,
            Search,
            Pedidos: {
              screen: createStackNavigator(
                {
                  Pedidos: {
                    screen: createMaterialTopTabNavigator(
                      {
                        Andamento,
                        Finalizado,
                      },
                      {
                        navigationOptions: {
                          title: "PEDIDOS",
                          headerTitleAlign: "center",
                          headerTitleStyle: {
                            color: "#333",
                            fontSize: 17,
                          },
                          headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            shadowRadius: 0,
                            shadowOffset: { height: 0, width: 0 },
                          },
                        },
                        tabBarOptions: {
                          labelStyle: {
                            color: "#000",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                          },
                          style: {
                            fontSize: 12,
                            elevation: 0,
                            shadowOpacity: 0,
                            shadowRadius: 0,
                            shadowOffset: { height: 0, width: 0 },
                            backgroundColor: "#FFF",
                          },
                          indicatorStyle: {
                            backgroundColor: "#f76abc",
                          },
                        },
                        style: {
                          backgroundColor: "#FFF",
                        },
                      }
                      ),
                    },
                  },
                  {
                    navigationOptions: {
                      tabBarIcon: ({ tintColor }) => (
                        <Icon name="box" size={25} color={tintColor} />
                        ),
                      },
                    }
                    ),
                  },
                  Settings,
                },
                {
                  tabBarOptions: {
                    keyboardHidesTabBar: true,
                    activeTintColor: "#000",
                    inactiveTintColor: "rgba(0,0,0,0.6)",
                    style: {
                      backgroundColor: "#fefefe",
                      borderTopColor: "#2dc7ff",
                      borderTopWidth: 2,
                      paddingTop: 4,
                    },
                  },
                }
                ),
              },
              
              { initialRouteName: "App" }
    )
  );

import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Order from "./pages/Order";
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
            Order,
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

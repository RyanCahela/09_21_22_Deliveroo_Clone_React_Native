import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./screens/DishDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetailsScreen}
        />
        <Stack.Screen name="DishDetails" component={DishDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";

import "./styles";

export default function App() {
  return (
    <View className="flex-1 bg-orange-300 items-center justify-center">
    <ScrollView className="bg-green-300 pt-24" horizontal={true}>
      <Text className="">Open up App.js to start working on your app!</Text>
      <Text className="">Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ScrollView>
    </View>
  );
}

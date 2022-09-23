import React, { useLayoutEffect } from "react";
import { Text, View, ScrollView, Button, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import "../styles/";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-red-300 items-center justify-center">
      <ScrollView className="bg-purple-800 text-white">
        <Text className="text-white text-3xl">Details Screen</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

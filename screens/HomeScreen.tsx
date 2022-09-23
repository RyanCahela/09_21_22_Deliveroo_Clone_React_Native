import React, { useLayoutEffect } from "react";
import { Text, View, ScrollView, Button, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import "../styles/";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-orange-300 items-center justify-center">
      <ScrollView className="bg-blue-800 text-white">
        <Text className="text-white text-3xl">Home Screen</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Go Details"
          onPress={() => navigation.navigate("Details")}
        />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

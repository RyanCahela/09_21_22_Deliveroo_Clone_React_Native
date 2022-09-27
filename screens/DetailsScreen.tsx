import React, { useLayoutEffect } from "react";
import { Text, View, ScrollView, Button, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import "../styles/";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const {
    title,
    id,
    imgUrl,
    rating,
    genre,
    address,
    short_description,
    dishes,
    longitude,
    latitued,
  } = useRoute().params;

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
        <Text>{title}</Text>
        <Text>{address}</Text>
        <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

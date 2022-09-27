import React, { useLayoutEffect } from "react";
import { StarIcon, ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import {
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import "../styles/";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

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
    <View className="flex-1 bg-white">
      <ScrollView className="relative">
        <View>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-48"
          />
        </View>
        <TouchableOpacity
          className="absolute top-20 left-8"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftCircleIcon className="text-white bg-black rounded-full" />
        </TouchableOpacity>
        <View className="px-6 pt-8 space-y-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row items-center text-green-500">
            <StarIcon className="text-inherit" />
            <Text className="text-inherit ml-2 text-xl">{rating}</Text>
          </View>
          <Text className="">{address}</Text>
          <Text>{short_description}</Text>
          <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
          <StatusBar style="auto" />
        </View>
        {dishes.map((dish) => (
          <View key={dish._id}>
            <Text>{dish.name}</Text>
            <Image
              source={{ uri: urlFor(dish.image).width(200).url() }}
              className="w-24 h-24"
            />
            <Text>{dish.short_description}</Text>
            <Text>${dish.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

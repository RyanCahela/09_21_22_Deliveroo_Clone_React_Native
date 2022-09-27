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
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";

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
          className="absolute top-20 left-8 scale-150"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftCircleIcon className="text-white bg-black rounded-full" />
        </TouchableOpacity>
        <View className="px-6">
          {/* Restaurant Info */}
          <View className="pt-8 space-y-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center text-green-500">
              <StarIcon className="text-inherit" />
              <Text className="text-inherit ml-2 text-xl">{rating}</Text>
            </View>
            <Text className="">{address}</Text>
            <Text className="text-xl">{short_description}</Text>
            <StatusBar style="auto" />
          </View>
          {/* Allergies ? */}
          <View className="flex-row items-center space-x-4 py-8">
            <QuestionMarkCircleIcon className="text-gray-500" />
            <Text className="font-bold">Have A food allergy?</Text>
            <ChevronRightIcon className="ml-auto" color="#00CCBB" />
          </View>
          {/* Dishes */}
          {dishes.map((dish) => (
            <View className="flex-row space-x-8 w-3/4" key={dish._id}>
              <View className="w-full">
                <Text className="text-2xl">{dish.name}</Text>
                <Text className="">{dish.short_description}</Text>
                <Text>${dish.price}</Text>
              </View>
              <Image
                source={{ uri: urlFor(dish.image).width(200).url() }}
                className="w-1/4 h-24"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

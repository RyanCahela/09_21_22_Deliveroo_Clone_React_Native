import React, { useLayoutEffect } from "react";
import { StarIcon, ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import "../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="relative">
        {/* Header */}
        <View>
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
            <ArrowLeftCircleIcon
              className="text-white bg-black rounded-full"
              stroke="#333"
              fill="#FFF"
            />
          </TouchableOpacity>
        </View>
        <View className="px-6">
          {/* Restaurant Info */}
          <View className="pt-8 space-y-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center text-green-500">
              <StarIcon className="text-inherit" />
              <Text className="text-inherit ml-2 text-xl">
                {rating.toFixed(1)}
              </Text>
            </View>
            <View className="flex-row">
              <MapPinIcon className="text-gray-500" />
              <Text className="">{address}</Text>
            </View>
            <Text className="text-xl">{short_description}</Text>
            <StatusBar style="auto" />
          </View>
          {/* Allergies ? */}
          <TouchableOpacity className="flex-row items-center py-8">
            <QuestionMarkCircleIcon className="text-gray-500" />
            <Text className="font-bold ml-4">Have A food allergy?</Text>
            <ChevronRightIcon className="ml-auto" color="#00CCBB" />
          </TouchableOpacity>
          {/* Dishes */}
          <View className="">
            {dishes.map((dish) => (
              <DishRow dish={dish} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

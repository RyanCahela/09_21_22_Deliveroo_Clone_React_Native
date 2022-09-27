import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCard = ({
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
}) => {
  console.log(`imgUrl of ${title}`, imgUrl);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-3 bg-white shadow w-64"
      onPress={() =>
        navigation.navigate("Details", {
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
        })
      }
    >
      <Image source={{ uri: urlFor(imgUrl).url() }} className="w-64 h-36" />
      <View className="px-3 pb-4">
        <Text className="font-bold pt-2 text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-green-500">{rating}</Text>
          <Text className="text-xs text-gray-500">· {genre}</Text>
        </View>

        <View className="flex-row flex-wrap space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-inherit">Nearby · </Text>
          <Text className="text-inherit truncate">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

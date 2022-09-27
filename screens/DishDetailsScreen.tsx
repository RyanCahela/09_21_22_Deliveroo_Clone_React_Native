import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { image, name, price, short_description } = route.params;

  return (
    <View>
      <View>
        <View>
          <Image
            source={{ uri: urlFor(image).url() }}
            className="w-full h-48"
          />
        </View>
        <TouchableOpacity
          className="absolute top-20 left-8 scale-150"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftCircleIcon className="text-white bg-black rounded-full" />
        </TouchableOpacity>
      </View>
      <Text>DishDetailsScreen</Text>
    </View>
  );
};

export default DishDetailsScreen;

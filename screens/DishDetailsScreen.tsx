import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  ArrowLeftCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import dish from "../sanity/schemas/dish";

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const {
    params: { image, name, price, short_description },
  } = useRoute();

  const [quantity, setQuantity] = useState(0);

  return (
    <View className="space-y-8">
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
          <ArrowLeftCircleIcon
            className="text-white bg-black rounded-full"
            stroke="#333"
            fill="#FFF"
          />
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <View>
          <Text>{name}</Text>
          <Text>{short_description}</Text>
          <Text>{price}</Text>
        </View>
        <View className="flex-row space-x-4 items-center">
          <TouchableOpacity
            onPress={() =>
              setQuantity((prevQuantity) => {
                //guards against negative quantities
                if (prevQuantity <= 0) {
                  return 0;
                }

                return --prevQuantity;
              })
            }
          >
            <MinusCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
          <Text className="text-3xl">{quantity}</Text>
          <TouchableOpacity
            onPress={() =>
              setQuantity((prevQuantity) => {
                return ++prevQuantity;
              })
            }
          >
            <PlusCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DishDetailsScreen;

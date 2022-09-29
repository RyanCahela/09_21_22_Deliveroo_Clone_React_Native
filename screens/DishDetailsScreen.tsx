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
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: { id, image, name, price, short_description },
  } = useRoute();
  const basket = useSelector((state) => selectBasketItemsWithId(state, id));

  const [quantity, setQuantity] = useState(0);

  const addItemToBasket = (itemInfo) => {
    dispatch(addToBasket(itemInfo));
  };

  const removeItemFromBasket = (itemInfo) => {
    dispatch(removeFromBasket(itemInfo));
  };

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
          <TouchableOpacity onPress={() => removeItemFromBasket({ id })}>
            <MinusCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
          <Text className="text-3xl">
            {basket.filter((item) => item.name === name).length}
          </Text>
          <TouchableOpacity
            onPress={() =>
              addItemToBasket({ id, price, name, short_description })
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

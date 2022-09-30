import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import DishQuantityCounter from "./DIshQuantityCounter";

const DishRow = ({ dish }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TouchableOpacity
        className="py-4"
        key={dish._id}
        onPress={() => setIsOpen((prevState) => !prevState)}
      >
        <View className="flex-row space-x-8 w-3/4" key={dish._id}>
          <View className="w-full">
            <Text className="text-lg font-bold">{dish.name}</Text>
            <Text className="text-gray-500">{dish.short_description}</Text>
          </View>
          <Image
            source={{ uri: urlFor(dish.image).width(200).url() }}
            className="w-1/4 h-full"
          />
        </View>
        <Text className="text-gray-500">${dish.price}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <DishQuantityCounter dish={dish} />
        </View>
      )}
    </>
  );
};

export default DishRow;

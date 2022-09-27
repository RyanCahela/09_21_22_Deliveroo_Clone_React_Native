import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).width(200).url(),
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="bg-gray-800 text-white absolute bottom-0 right-0 text-right font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

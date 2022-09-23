import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View className="mt-4">
      <View className="flex-row mt-4">
        <View>
          <Text className="font-bold text-gray-800 text-lg">{title}</Text>
          <Text>{description}</Text>
        </View>
        <View className="self-center ml-auto">
          <ArrowRightIcon color="#00CCBB" />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          title="Restaurant Title"
          id={123}
          imgUrl="https://picsum.photos/400/300"
          rating="4.0"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          longitude={20}
          latitued={13}
        />

        <RestaurantCard
          title="Restaurant Title"
          id={123}
          imgUrl="https://picsum.photos/400/300"
          rating="4.0"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          longitude={20}
          latitued={13}
        />
        <RestaurantCard
          title="Restaurant Title"
          id={123}
          imgUrl="https://picsum.photos/400/300"
          rating="4.0"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          longitude={20}
          latitued={13}
        />
        <RestaurantCard
          title="Restaurant Title"
          id={123}
          imgUrl="https://picsum.photos/400/300"
          rating="4.0"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          longitude={20}
          latitued={13}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import urlFor from "../sanity";
import restaurant from "../sanity/schemas/restaurant";

const FeaturedRow = ({
  title,
  description,
  featuredCategory,
  id,
  restaurants,
}) => {
  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //       *[_type == "featured" && _id == "2497876c-f345-41a5-9692-dcea80d45601"] {
  //         ...,
  //         restaurants[]->{
  //           ...,
  //           dishes[]->,
  //           type-> {
  //             name
  //           }
  //         }
  //       }
  //   `,
  //       { id: id }
  //     )
  //     .then((data) => setRestaurants(data))
  //     .catch((err) => new Error(err));
  // }, []);
  console.log("restaurants", restaurants);
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
        {restaurants.map((restaurant) => (
          <RestaurantCard
            title={restaurant.name}
            id={restaurant._id}
            imgUrl={restaurant.image}
            rating="4.0"
            genre={restaurant.type.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            longitude={restaurant.longitude}
            latitued={restaurant.latitude}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

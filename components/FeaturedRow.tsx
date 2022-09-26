import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import urlFor from "../sanity";
import restaurant from "../sanity/schemas/restaurant";

const FeaturedRow = ({ title, description, featuredCategory, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          },
        }[0]
        `,
        { id: id }
      )
      .then((data) => setRestaurants(data.restaurants));
  }, [id]);

  console.log("restaurants in Featured Row", restaurants);
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
            key={restaurant._id}
            title={restaurant.name}
            id={restaurant._id}
            imgUrl={restaurant.image}
            rating={restaurant.rating}
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

import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
        console.log("data", data);
      });
  }, []);

  console.log("featured Categories", featuredCategories);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 p-4 rounded-full bg-gray-300"
          />
        </View>
        <View className="flex-1">
          <Text className="text-gray-400 text-xs">Deliver Now</Text>
          <View className="flex-row">
            <Text className="text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row mx-4 items-center space-x-2 pb-2">
        <View className="flex-row flex-1 space-x-2 bg-grey-200 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon size={35} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="mb-32">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="467"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="890"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

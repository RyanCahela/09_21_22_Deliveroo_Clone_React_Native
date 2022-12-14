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
            dishes[]->{
          },
        }
      
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((err) => new Error(err));
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
        </View>
        <View className="flex-1">
          <Text className="text-gray-400 text-xs">Deliver Now</Text>
          <View className="flex-row">
            <Text className="text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
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
        {featuredCategories?.map((category) => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}
            restaurants={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

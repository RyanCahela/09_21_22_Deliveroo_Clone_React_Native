import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <Text>Categories Hello</Text>
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Card" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Card" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Card" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Card" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Card" />
    </ScrollView>
  );
};

export default Categories;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";

const DishQuantityCounter = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) =>
    selectBasketItemsWithId(state, dish._id)
  );

  const increaseQuantity = () => {
    dispatch(addToBasket(dish));
  };

  const decreaseQuantity = () => {
    dispatch(removeFromBasket(dish));
  };

  return (
    <View className="flex-row space-x-3 py-4">
      <TouchableOpacity onPress={decreaseQuantity}>
        <MinusCircleIcon size={32} color="#00CCBB" />
      </TouchableOpacity>
      <Text className="text-2xl">{items.length}</Text>
      <TouchableOpacity onPress={increaseQuantity}>
        <PlusCircleIcon size={32} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default DishQuantityCounter;

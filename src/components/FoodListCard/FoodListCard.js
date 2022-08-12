import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./FoodListCard.style";
const FoodListCard = ({meals,onSelect}) => {
    return(
        <TouchableWithoutFeedback style={styles.container} onPress={onSelect}>
            <View style={styles.bodyContainer}>
                <Image style={styles.image} source={{uri:meals.strMealThumb}}/>
                <View style={styles.opacityView}>
                </View>
                <Text style={styles.text} numberOfLines={1}>{meals.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FoodListCard;
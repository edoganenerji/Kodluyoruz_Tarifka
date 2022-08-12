import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./FoodChategoryCard.style";
const FoodChategoryCard = ({chategory,onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    <Image style={styles.image} source={{uri:chategory.strCategoryThumb}}/>
                    <Text style={styles.text} >{chategory.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FoodChategoryCard;

// {"idCategory":"1","strCategory":"Beef","strCategoryThumb":"https:\/\/www.themealdb.com\/images\/category\/beef.png","strCategoryDescription":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"}
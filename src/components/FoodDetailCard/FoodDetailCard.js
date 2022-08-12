import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./FoodDetailCard.style";
const FoodDetailCard = ({meals}) => {
    return(
        <View>
            <Image style={styles.image} source={{uri:meals.strMealThumb}}/>
            <View style={styles.bodyContainer}>
                <Text style={styles.header}>{meals.strMeal}</Text>
                <Text style={styles.areaText}>{meals.strArea}</Text>
                <View style={styles.seperator}></View>
                <Text style={styles.description}>{meals.strInstructions}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.bodyContainer} onPress={()=>Linking.openURL(`${meals.strYoutube}`)}>
                    <Text style={styles.button}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FoodDetailCard;
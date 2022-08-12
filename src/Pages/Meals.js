import React from "react";
import { View,Text,FlatList, StyleSheet } from "react-native";
import useFetch from "../hooks/useFetch";
import Config from "react-native-config";
import FoodListCard from "../components/FoodListCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
const Meals = ({route,navigation}) => {
    const {chategory} = route.params;
    const {error, loading, data} = useFetch(`${Config.API_MEALS}${chategory}`)
    if (error) {
        return <Error/>
    }
    if(loading) {
        return<Loading/>
    }
    const handleMealSelection= id => {
        return(
            navigation.navigate('Detail',id)
        )
    }
    const renderMeals = ({item}) => <FoodListCard meals = {item} onSelect={()=>handleMealSelection(item.idMeal)} />

    return(
        <View style={styles.container}>
            <FlatList
            data={data.meals}
            renderItem={renderMeals}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"orange",
    }
})
export default Meals;
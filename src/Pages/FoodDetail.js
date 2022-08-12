import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import useFetch from "../hooks/useFetch";
import Config from "react-native-config";
import FoodDetailCard from "../components/FoodDetailCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
const FoodDetail = ({route}) => {
    const id = route.params
    const {error, loading, data} = useFetch(`${Config.API_DETAIL}${id}`)
    if (error) {
        return <Error/>
    }
    if(loading){
        return <Loading/>
    }
    const renderMealDetail = ({item}) => <FoodDetailCard meals={item} />
    return(
        <View style={styles.container}>
            <FlatList
            data={data.meals}
            renderItem={renderMealDetail}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:`#f8f8ff`,
    }
})
export default FoodDetail;
import React, {useState, useEffect} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import FoodChategoryCard from "../components/FoodChategoryCard";
import Config from "react-native-config";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
const FoodChategory = ({navigation}) => {
    const {error, loading, data} = useFetch(Config.API_URL);
    
    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error />
    }

    const handleChategorySelection = chategory => {
        return(navigation.navigate('Meals',{chategory}))
    }

    const renderChategory = ({item}) => <FoodChategoryCard chategory={item} onSelect={()=>handleChategorySelection(item.strCategory)}/>
    return(
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderChategory}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:3,
        backgroundColor:"orange"
    }
})

export default FoodChategory;
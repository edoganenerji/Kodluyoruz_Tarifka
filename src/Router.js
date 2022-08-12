import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodChategory from "./Pages/FoodChategory";
import Meals from "./Pages/Meals";
import FoodDetail from "./Pages/FoodDetail";
const Stack = createNativeStackNavigator()

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={
        {
          headerStyle:{backgroundColor:"white"},
          headerTitleStyle: {color:"orange"},
          headerTitleAlign:"center",
        }
      }>
        <Stack.Screen name="Categories" component={FoodChategory}
        options={{
          headerBackTitle:"Categories",
        }}
        />
        <Stack.Screen name="Meals" component={Meals}
        options={{
          headerTintColor:"orange",
        }}
        />
        <Stack.Screen name="Detail" component={FoodDetail}
        options={{
          headerTintColor:"orange",
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
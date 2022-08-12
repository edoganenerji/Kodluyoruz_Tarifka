import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        margin:3,
        borderWidth:1,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        backgroundColor:"white"
    },

    image:{
        width:50,
        height:50,
        resizeMode:"contain"
    },

    bodyContainer:{
        flexDirection:"row",
        margin:3,
    },

    text:{
        flex:1,
        fontSize:24,
        paddingLeft:15,
        textAlignVertical:"center",
        color:"black"
    }
})
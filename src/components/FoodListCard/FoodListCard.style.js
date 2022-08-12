import { StyleSheet, Dimensions } from "react-native";
const dimension = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderRadius:50,
        margin:10,
    },
    image:{
        flex:1,
        height:dimension.height/4,
        resizeMode:"cover",
        borderRadius:10
    },
    bodyContainer:{
        flex:1,
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        marginBottom:10,
    },
    text:{
        flex:1,
        fontSize:25,
        position:"absolute",
        color:"white",
        right:5,
        bottom:5,
        alignItems:"stretch",
        flexShrink:1,
        
    },
    opacityView:{
        flex:1,
        opacity:0.7,
        borderWidth:1,
        height:50,
        width:dimension.width/1.09,
        position:"absolute",
        bottom:0,
        backgroundColor:"black",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    }
})
import { Dimensions, StyleSheet } from "react-native";
const dimension = Dimensions.get('window');
export default StyleSheet.create({
    container:{},
    bodyContainer:{
        padding:5
    },
    buttonContainer:{
    },
    header:{
        fontSize:24,
        color:"#b22222",
        fontWeight:"bold"
    },
    areaText:{
        fontSize:18,
        color:"#b22222",
        fontWeight:"bold"
    },
    seperator:{
        borderWidth:0.5,
        borderColor:'#dcdcdc'
    },
    image:{
        height:dimension.height/3,
    },
    description:{
        fontSize:14,
        color:"black"
    },
    buttonContainer:{
        backgroundColor:"red",
        margin:15,
        borderRadius:10,

    },
    button:{
        color:"white",
        fontSize:18,
        margin:5,
        textAlign:"center",
        fontWeight:"bold"
    }
})
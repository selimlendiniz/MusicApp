import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container:{
        padding:10,
        flex:1,
        justifyContent:'center',


    },
    title:{
        fontWeight:'bold',
        fontSize:27,
    },
    info_container:{
        alignItems:'center',
        flexDirection:'row',
        flex:1,
    },
    year:{
        fontSize:12,
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',

    },
    content_container:{
        flexDirection:'row',

    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    soldout_title:{
        color:'red',
    },


})



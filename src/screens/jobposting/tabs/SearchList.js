import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {COLORS ,SIZES } from '../../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const SearchList = () => {
    const navigation= useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate("JobDetails")}>
        <View style={styles.image}>
            <Image source={{uri:item.imageUrl}} style={styles.jobImg}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.jobTitle}></Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchList

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:SIZES.small,
        flexDirection:"row",
        padding:SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor:"#FFF",
        shadowColor: COLORS.lightWhite
    },
    image:{
        width:70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent:"center",
        alignContent:"center"
    },
    jobImg:{
        width:"100%",
        height:65,
        borderRadius:SIZES.small,
        resizeMode:"cover"
    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium
    },
    jobTitle:{
        fontSize:SIZES.medium,
        fontFamily:"bold",
        colr:COLORS.primary
    }
})
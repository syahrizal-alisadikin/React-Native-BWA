import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1,IcStarOff,IcStarOn } from '../../../assets'

const FoodCard = ({image,menu}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.content}>
                <Text>{menu}</Text>
                <View style={{ flexDirection:'row' }}>
                <View style={{ flexDirection:'row' }}>
                        <IcStarOn/>
                        <IcStarOn/>
                        <IcStarOn/>
                        <IcStarOn/>
                        <IcStarOff/>
                </View>
                    <Text>4.5</Text>
                </View>
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container:{
        width:200,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor:'black',
        shadowOffset: {width:0,height:7},
        shadowOpacity: 0.5,
        shadowRadius:10,
        elevation:14,
        overflow:'hidden',
        marginRight:16
    },
    image:{width:200,height:140,resizeMode:'cover'},
    content:{ padding:12 }

})

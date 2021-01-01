import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Rating } from '../../molecules'

const FoodCard = ({image,menu}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.content}>
                <Text>{menu}</Text>
               {/* Rating */}
               <Rating/>
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container:{
        width:150,
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
    image:{width:150,height:140,resizeMode:'cover'},
    content:{ padding:12 }
});

import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { Rating } from '..';

const FoodListItem = ({image,menu,price,onPress}) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={{ paddingTop:8 }}>
            <View style={{ flexDirection:'row',paddingHorizontal:20,alignItems:'center' }}>
                <Image source={image} style={{ height:60, width:60, borderRadius:10, marginRight:10 }}/>
                <View style={{ flex:1 }}>
                <Text style={{ fontSize:16,color:'black',fontWeight:'600' }}>{menu}</Text>
                <Text style={{ fontSize:14,color:'grey',fontWeight:'500' }}>Rp{price}</Text>
                </View>
                <Rating/>
            </View>
        </View>
      </TouchableOpacity>
    )
}

export default FoodListItem;

const styles = StyleSheet.create({})

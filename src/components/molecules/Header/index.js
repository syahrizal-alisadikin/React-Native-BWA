import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {IcBack} from '../../../assets';

const Header = ({title,subTitle,onBack}) => {
    return (
        <View style={ styles.container }>
            {onBack && (
                <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
                <View style={styles.back}>
                    <IcBack />
                </View>
                </TouchableOpacity>
            )}
            <View>
                <Text style={styles.title}>{title} </Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{backgroundColor:'white',
                paddingHorizontal:24,
                paddingBottom:24,
                paddingTop:30,
                flexDirection: 'row',
                alignItems: 'center',},
    title:{color:'#388E3C',
            fontSize:22,
            fontWeight:'bold'},
    subTitle:{fontSize:14,color:'#8D92A3',fontWeight:'300'},
    back: {
    padding: 16,
    backgroundColor:'white',
    marginRight: 10,
    marginLeft: -10,
  },
})

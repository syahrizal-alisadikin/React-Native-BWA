import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {ProfileDummy} from '../../../assets';

const HomeProfile = () => {
    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.title}>Skripsi 2021</Text>
                <Text style={styles.subtitle}>Makan Lebih Murah</Text>
            </View>
            <Image source={ProfileDummy} style={styles.imageDumy}/>
        </View>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    profileContainer:{backgroundColor:'yellow',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:24,
                        paddingBottom:24,
                        paddingTop:32},
    imageDumy:{height:50, width:50, borderRadius:8},
    title : {fontSize:22,fontWeight:'700',color:'#020202'},
    subtitle:{color:'grey',fontSize:14},
})

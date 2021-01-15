import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {ProfileDummy} from '../../../assets';
import { getData } from '../../../utils';

const HomeProfile = () => {

    const [photo, setphoto] = useState(ProfileDummy);
    useEffect(() => {
        getData('userProfile').then((res) => {
            console.log('user',res)
            setphoto({uri:res.profile_photo_url})
        })
    }, [])
    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.title}>Skripsi 2021</Text>
                <Text style={styles.subtitle}>Makan Lebih Murah</Text>
            </View>
            <Image source={photo} style={styles.imageDumy}/>
        </View>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    profileContainer:{backgroundColor:'white',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:24,
                        paddingBottom:24,
                        paddingTop:32},
    imageDumy:{height:50, width:50, borderRadius:8},
    title : {fontSize:22,fontWeight:'700',color:'#020202'},
    subtitle:{color:'grey',fontSize:14},
})

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ProfileDummy } from '../../assets'
import { Gap, ProfileTabSection } from '../../components'

const Profile = () => {
    return (
        <View style={styles.pages}>
           <View style={styles.profile}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <Image source={ProfileDummy} style={styles.photoContainer}/>
                    </View>
                </View>
                <Text style={styles.name}>Syahrizal As</Text>
                <Text style={styles.email}>alisadikinsyahrizal@gmail.com</Text>
           </View>
            <View style={styles.content}>
                <ProfileTabSection/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    pages:{flex:1},
    profile:{backgroundColor:'white',paddingBottom:20},
    photo:{alignItems:'center',marginBottom:16,marginTop:20},
    name:{textAlign:'center',fontSize:18,fontWeight:'bold'},
    email:{textAlign:'center',color:'grey'},
    content:{flex:1,marginTop:20},
    borderPhoto:{
        borderWidth: 1,
        borderColor:'#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer:{width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor:'#F0f0f0',
        padding:24},
})

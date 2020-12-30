import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessSignUp } from '../../assets'
import {Button,Gap} from '../../components'

const SuccessSignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp/> 
            <Gap height={30}/>
            <Text style={styles.title}>Yeay ! Completed</Text>
            <Gap height={6}/>

            <Text  style={styles.subTitle}> Now you are able to order</Text>
            <Text style={styles.subTitle}>some foods as a self-reward</Text>
            <Gap height={25}/>
            <View style={styles.buttonContainer}>
                <Button textColor={'white'} color={'green'} text={'Sign'} onPress={() => navigation.replace('MainApp')} />

            </View>
        </View>
    )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    page:{backgroundColor:'yellow',flex:1, justifyContent:'center',alignItems:'center'},
    title:{color:'#020202', fontWeight:'bold',fontSize:18,},
    subTitle:{color:'#8D92A3',fontSize:16},
    buttonContainer:{width:'100%',paddingHorizontal:80}
})

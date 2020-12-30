import React from 'react'
import { View,StyleSheet } from 'react-native'
import {Header, InputText,Button, Gap} from '../../components'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={'Welcome'} subTitle={'Menabung Kebaikan'}/>
            <View style={styles.container}>
                <InputText label={'Email'} placeholder={'Masukan Email'}/>
                <Gap height={16}/>
                <InputText label={'Password'} placeholder={'Masukan Password'}/>
                <Gap height={24}/>

                <Button text={'Masuk'} />
                <Gap height={12}/>

                <Button color={'green'} textColor={'white'} text={'Daftar'} onPress={() => navigation.navigate('SignUp')}/>
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white',
                paddingHorizontal:24,
                paddingVertical:26,
                marginTop:24,
                flex:1},
 
})


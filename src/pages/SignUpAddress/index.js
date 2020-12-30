import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Header,InputText,Gap,Select} from '../../components'

const SignUpAddress = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={'Address'} subTitle={'Make Sure is Valid'} onBack={() => {navigation.replace('SignUp')} }/>
            <View style={styles.container}>
                <InputText label={'Phone'} placeholder={'Masukan no Telephone'}/>
                <Gap height={10}/>
                <InputText label={'Address'} placeholder={'Masukan Address'}/>
                <Gap height={10}/>
                
                <InputText label={'House Number'} placeholder={'Masukan House Number'}/>
                <Gap height={20}/>
                <Select label={'City'}/>
                <Gap height={20}/>
                
                <Button textColor={'white'} color={'green'} text={'Sign Up Now'} onPress={() => navigation.replace('SuccessSignUp')} />
            </View>
          </View>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
     page:{flex:1},
    container:{backgroundColor:'white',
                paddingHorizontal:24,
                paddingVertical:26,
                marginTop:24,
                flex:1},
    
})

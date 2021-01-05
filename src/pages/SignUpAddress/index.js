import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import {Button, Header,InputText,Gap,Select} from '../../components'
import {CustomeHook} from '../../utils';
import  {useSelector} from 'react-redux';
import axios from 'axios';

import { showMessage } from "react-native-flash-message";

const SignUpAddress = ({navigation}) => {

    const [form, setform] = CustomeHook({
        address:'',
        city:'Bandung',
        houseNumber:'',
        phoneNumber:''
    })

    const registerReducer = useSelector((state) => state.registerReducer)

    const OnsubmitAddress = () => {
       const data = {
            ...form,
            ...registerReducer
        }
        console.log('Register',data)
        axios.post('http://foodmarket-backend.buildwithangga.id/api/register',data)
                .then((response) => {
                    console.log('register success', response.data)
                    navigation.replace('SuccessSignUp')

                })
                .catch((err) => {
                    console.log('error register',err.response.data.message)
                    ShowToast(err?.response?.data?.message,'danger','danger')
                })
        // navigation.replace('SuccessSignUp')
    }


    const ShowToast = (message,type,icon) => {
        showMessage({
                message,
                type: type === "info" ? 'success' : 'danger',
                backgroundColor: type === "info" ? 'green' : 'red',
                duration: 5000,
                icon: icon
            });
    }

    return (
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
            <View style={styles.page}>
            <Header title={'Address'} subTitle={'Make Sure is Valid'} onBack={() => {navigation.replace('SignUp')} }/>
            <View style={styles.container}>
                <InputText label={'Phone'} placeholder={'Masukan no Telephone'} value={form.phone} onChangeText={(value) => setform('phoneNumber',value)}/>
                <Gap height={10}/>
                <InputText label={'Address'} placeholder={'Masukan Address'}  value={form.address} onChangeText={(value) => setform('address',value)}/>
                <Gap height={10}/>
                
                <InputText label={'House Number'} placeholder={'Masukan House Number'}  value={form.houseNumber} onChangeText={(value) => setform('houseNumber',value)}/>
                <Gap height={20}/>
                <Select label={'City'} value={form.city} selectChange={(value) => setform('city',value)}/>
                <Gap height={20}/>
                
                <Button textColor={'white'} color={'green'} text={'Sign Up Now'} onPress={OnsubmitAddress} />
            </View>
        </View>
      </ScrollView>

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

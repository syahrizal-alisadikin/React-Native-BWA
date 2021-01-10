import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { View,StyleSheet } from 'react-native'
import {Header, InputText,Button, Gap} from '../../components'
import { CustomeHook } from '../../utils';

const SignIn = ({navigation}) => {
    // Local Hook
    //  const [email, setemail]  = useState('');
    //  const [password, setpassword] = useState('');
     const dispatch = useDispatch();
    //  Custome Hook
    const [form,setform] = CustomeHook(
        // Yang mengirim data email sama password
        {
            'email' : '',
            'password': '',
        }
    );

     const OnSubmit = () => {
         console.log('form',form)
         
         axios.post('http://foodmarket-backend.buildwithangga.id/api/login',form)
                .then((response) => {
                    console.log(response)

                })
                .catch((err) => {
                    console.log(err)
                })
     }
    return (
        <View style={styles.page}>
            <Header title={'Welcome'} subTitle={'Menabung Kebaikan'}/>
            <View style={styles.container}>
                <InputText label={'Email'} placeholder={'Masukan Email'} value={form.email} onChangeText={(dataemail) => setform('email',dataemail)}/>
                <Gap height={16}/>
                <InputText label={'Password'} placeholder={'Masukan Password'} secureTextEntry value={form.password} onChangeText={(datapassword) => setform('password',datapassword)}/>
                <Gap height={24}/>

                <Button text={'Masuk'} onPress={OnSubmit} />
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


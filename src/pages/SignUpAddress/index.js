import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import {Button, Header,InputText,Gap,Select} from '../../components'
import {CustomeHook, ShowMessage} from '../../utils';
import  {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';


const SignUpAddress = ({navigation}) => {

    const [form, setform] = CustomeHook({
        address:'',
        city:'Bandung',
        houseNumber:'',
        phoneNumber:''
    })

    // Contstractor
    const {registerReducer,photoReducer} = useSelector((state) => state)
    const dispatch = useDispatch();
    const OnsubmitAddress = () => {
       const data = {
            ...form,
            ...registerReducer
        }

        // Loading 
        dispatch({type:'SET_LOADING',value:true})
        axios.post('http://foodmarket-backend.buildwithangga.id/api/register',data)
                .then((response) => {
                    console.log('register success', response.data)
                    const imageUload = new FormData();
                    imageUload.append('file',photoReducer)

                    // jika ada photo yg di upoload,jalankan axios mengirim gambar
                   if(photoReducer.isUploadPhoto){
                        axios.post('http://foodmarket-backend.buildwithangga.id/api/user/photo',imageUload,{
                        headers:{
                        'Authorization' : `${response.data.data.token_type} ${response.data.data.access_token}`,
                        'Content-Type'  : 'multipart/form-data'
                        }
                        })
                        .then(res => {console.log('Data Upload',res)})
                        .catch(err => {ShowMessage(err,'Data Image Gagal di upload')})
                   }
                    navigation.replace('SuccessSignUp')
                    dispatch({type:'SET_LOADING',value:false})

                })
                .catch((err) => {
                    dispatch({type:'SET_LOADING',value:false})

                    console.log('error register',err.response.data.message)
                    ShowMessage(err?.response?.data?.message,'danger','danger')
                })
        // navigation.replace('SuccessSignUp')
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

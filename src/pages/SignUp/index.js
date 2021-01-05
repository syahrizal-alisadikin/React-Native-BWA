import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import {Button, Header,InputText,Gap} from '../../components'
import {useSelector, useDispatch} from 'react-redux';
import { CustomeHook} from '../../utils';
const SignUp = ({navigation}) => {

    const [form,setform] = CustomeHook({
        name:'',
        email:'',
        password:''
    });

    const dispatch = useDispatch();
    
    const SubmitRegister = () => {
        console.log('register', form)
        // Menyimpan ke store Redux
        dispatch({type:'SET_REGISTER',value:form})

        navigation.navigate('SignUpAddress')
    }

    return (
          <ScrollView contentContainerStyle={{ flexGrow:1 }}>
              <View style={styles.page}>
                    <Header title={'Pendaftaran'} subTitle={'Mulai Menabung Kebaikan'} onBack={() => {navigation.replace('SignIn')} }/>
                    <View style={styles.container}>
                        <View style={styles.photo}>
                            <View style={styles.borderPhoto}>
                            <View style={styles.photoContainer}>
                                <Text style={styles.addPhoto}>add photo</Text>
                            </View>
                        </View>
                        </View>
                        <InputText label={'Full Name'} placeholder={'Masukan FullName'} value={form.name} onChangeText={(value) => setform('name',value)}/>
                        <Gap height={10}/>
                        <InputText label={'Email'} placeholder={'Masukan Email'} value={form.email} onChangeText={(value) => setform('email',value)}/>
                        <Gap height={10}/>
                        
                        <InputText label={'Password'} placeholder={'Masukan Password'} secureTextEntry value={form.password} onChangeText={(value) => setform('password',value)}/>
                        <Gap height={20}/>
                        
                        <Button textColor={'white'} color={'green'} text={'Continue'} onPress={SubmitRegister } />
                    </View>
                </View>
          </ScrollView>

    )
}

export default SignUp

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white',
                paddingHorizontal:24,
                paddingVertical:26,
                marginTop:24,
                flex:1},
    photo:{alignItems:'center',marginBottom:16,marginTop:20},
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
    addPhoto:{fontSize:14,fontWeight:'400',color:'#8D92A3',textAlign:'center'},
 
})

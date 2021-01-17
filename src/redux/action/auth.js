import { ShowMessage, storeData } from "../../utils";
import { setLoading } from "./global";
import axios from 'axios';

const Host_Url = {
    url_api :'http://foodmarket-backend.buildwithangga.id/api'
}
export const signUpAction = (data,photoReducer,navigation) => (dispatch) => {


     axios.post(`${Host_Url.url_api}/register`,data)
     .then((response) => {
                    // menyimpan data profile
                    const userProfile = response.data.data.user;
                    // Menyimpan token
                    const token = `${response.data.data.token_type} ${response.data.data.access_token}`;
                    storeData('token',{value:token})
                    const imageUload = new FormData();
                    imageUload.append('file',photoReducer)

                    // jika ada photo yg di upoload,jalankan axios mengirim gambar
                   if(photoReducer.isUploadPhoto){
                        axios.post(`${Host_Url.url_api}/user/photo`,imageUload,{
                        headers:{
                        'Authorization' : token,
                        'Content-Type'  : 'multipart/form-data'
                        }
                        })
                        .then(res => {
                            userProfile.profile_photo_url = `https://foodmarket-backend.buildwithangga.id/storage/${res.data.data[0]}`
                            storeData('userProfile',userProfile)
                            navigation.reset({index: 0, routes:[{name:'SuccessSignUp'}]})

                        })
                        .catch(err => {
                            ShowMessage(err,'Data Image Gagal di upload')
                            navigation.reset({index: 0, routes:[{name:'SuccessSignUp'}]})

                        })
                   }else{
                    navigation.reset({index: 0, routes:[{name:'SuccessSignUp'}]})
                   }
                    dispatch(setLoading(false))

                })
                .catch((err) => {
                    dispatch(setLoading(false))

                    console.log('error register',err.response.data.message)
                    ShowMessage(err?.response?.data?.message,'danger','danger')
                })


}

export const signInAction = (form,navigation) => (dispatch) => {
    console.log(form)
    dispatch(setLoading(true))
    axios.post(`${Host_Url.url_api}/login`,form)
        .then((response) => {
            // menyimpan data profile
            const userProfile = response.data.data.user;
            storeData('userProfile',userProfile)

            // Menyimpan token
            const token = `${response.data.data.token_type} ${response.data.data.access_token}`;
            storeData('token',{value:token})
            dispatch(setLoading(false))

            navigation.reset({index:0, routes:[{name:'MainApp'}]})

        })
        .catch((err) => {
            dispatch(setLoading(false))
            console.log(err)
            ShowMessage(err?.response?.data?.message,'danger','danger')

        })
}
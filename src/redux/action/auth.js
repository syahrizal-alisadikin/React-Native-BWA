import { ShowMessage, storeData } from "../../utils";
import { setLoading } from "./global";
import axios from 'axios';

export const signUpAction = (data,photoReducer,navigation) => (dispatch) => {

    const Host_Url = {
        url_api :'http://foodmarket-backend.buildwithangga.id/api'
    }

     axios.post(`${Host_Url.url_api}/register`,data)
     .then((response) => {
                    // menyimpan data profile
                    const userProfile = response.data.data.user;
                    storeData('userProfile',userProfile)
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
                        .then(res => {console.log('Data Upload',res)})
                        .catch(err => {ShowMessage(err,'Data Image Gagal di upload')})
                   }
                    navigation.replace('SuccessSignUp')
                    dispatch(setLoading(false))

                })
                .catch((err) => {
                    dispatch(setLoading(false))

                    console.log('error register',err.response.data.message)
                    ShowMessage(err?.response?.data?.message,'danger','danger')
                })


}
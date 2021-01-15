import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShowMessage } from '../ShowMessage';

// Menyimpan data 
export const storeData = async (storagekey,value) => {
  try {
    const userProfile = JSON.stringify(value)
    await AsyncStorage.setItem(storagekey, userProfile)
  } catch (e) {
    // saving error
    ShowMessage('data gagal disimpan ke localstorage')
  }
}

// Mengambil data 

export const getData = async (storagekey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storagekey)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    ShowMessage('data gagal di ambil')
  }
}
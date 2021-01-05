import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

// initialValue = param yang di inut user
// formType = Type nya email/password
// formValue = Value yg di kirim user
const CustomeHook = (initialValue) => {
   const [form,setform] = useState(initialValue);

   return [form,
        (formType,formValue) => setform({...form,[formType]: formValue})
    ]
}

export default CustomeHook

const styles = StyleSheet.create({})

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle'
import {TextInput} from 'react-native-paper';

import * as Animatable from 'react-native-animatable'
import {auth} from '../data/firebaseConfig';


export default function SignUp() {

  const [userName,setUserName]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function CreatUser() {
    
    auth.createUserWithEmailAndPassword(email.trim(), password)
    .catch(error => {
      Alert.alert(error.message)
    });
  }

  return (
    <TouchableWithoutFeedback
    onPress={()=> Keyboard.dismiss()}>
    <View style={{padding: 25, backgroundColor:'white', flex:1}}>

    <TextInput
        label='UserName'
        mode='outlined'
        placeholder='e.g: CoolName'
        theme={{colors: {primary: '#4898D3', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setUserName(text)} />

    <TextInput
        label='Email'
        mode='outlined'
        placeholder='e.g: yourMail@mail.com'
        theme={{colors: {primary: '#4898D3', background: '#fff' }}}
        style={{marginTop: 25}}
        onChangeText={text => setEmail(text)} />

        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Enter your Password'
        theme={{colors: {primary: '#4898D3', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={text => setPassword(text)} />


        <TouchableOpacity
        style={{
            alignSelf:'center', 
            backgroundColor: '#4898D3',
            height: 40,
            borderRadius: 30,
            width: 200,
            margin: 20 }}
        onPress={()=> CreatUser()}>
        <Text
        style={{
            fontSize: 25,
            alignSelf:'center',
            color:'white',
            fontWeight: 'bold'}}>
            Creat account</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You already have an account ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.replace('SignIn')}>
          <Text style={{color:'#4898D3'}}>Sign In</Text>
        </TouchableOpacity>
        </View>

    </View>
    </TouchableWithoutFeedback>
  );
}
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert,Keyboard, TouchableWithoutFeedback} from 'react-native';
import {TextInput} from 'react-native-paper';

import {auth,db} from '../data/firebaseConfig';


export default function SignUp({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName,setUserName]=useState("")

  function CreatUser() {
    auth.createUserWithEmailAndPassword(email.trim(), password)
    .catch(error => {
      Alert.alert(error.message)
    }).then(userInfo=>{
      return userInfo.user.updateProfile({displayName:userName});
    }).then(()=>{
      db.ref('/user/'+auth.currentUser.uid+'/info').set({
        username:userName,
        email:auth.currentUser.email,
      })
    })
  }

  return (
    <TouchableWithoutFeedback
    onPress={()=> Keyboard.dismiss()}>
    <View style={{padding: 25, backgroundColor:'white', flex:1}}>

    <TextInput
        label='User name'
        mode='outlined'
        placeholder='user name'
        theme={{colors: {primary: '#4898D3', background: '#fff' }}}
        style={{marginTop: 25}}
        onChangeText={name => setUserName(name)} />

    <TextInput
        label='Email'
        keyboardType='email-address'
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
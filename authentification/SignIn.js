import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle'
import {TextInput} from 'react-native-paper';

import * as Animatable from 'react-native-animatable'
import {auth} from '../data/firebaseConfig';


export default function SignIn({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    function signIn() {
      auth.signInWithEmailAndPassword(email.trim(), password)
      .catch(error => {
        Alert.alert(error.message)
      });
    }

  return (


    <View style={{padding: 25, backgroundColor:'white', flex:1}}>
    <TextInput
        label='Email'
        mode='outlined'
        placeholder='e.g: yourMail@mail.com'
        theme={{colors: {primary: '#4898D3', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Enter your Password'
        theme={{colors: {primary: '#4898D3', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
        onPress={()=> alert('comming up on the next virsion')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#4898D3',
        }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{
            alignSelf:'center', 
            backgroundColor: '#4898D3',
            height: 40,
            borderRadius: 30,
            width: 150,
            margin: 20 }}
        onPress={()=> signIn()}>
        <Text
        style={{
            fontSize: 25,
            alignSelf:'center',
            color:'white',
            fontWeight: 'bold'}}>
            Sign In</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You don't have an account ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.replace('SignUp')}>
          <Text style={{color:'#4898D3'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>

    </View>    
  );
}
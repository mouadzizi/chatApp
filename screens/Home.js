import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle'

import {auth} from '../data/firebaseConfig';

export default function Home(){

    function signOutUser() {
        
        auth.signOut()
        .catch(err=>Alert.alert('Error',err.message))
    }
    return(
        <View style={GlobalStyle.container}> 
        <Text>Hello this is home </Text>
        <TouchableOpacity
        onPress={()=>signOutUser()}
        style={{
            margin:50,
            backgroundColor:'#4898D3'
        }}>
            <Text>Sign Out</Text>
        </TouchableOpacity>
        </View>
    )
}
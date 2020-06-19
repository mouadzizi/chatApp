import React, {useState} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';

import {auth} from '../data/firebaseConfig'

export default function Home(){
    return(
        
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{flex : 1, backgroundColor:'white',}}> 
            <View>
                <Image
                source={require("../assets/logo.jpg")}
                style={{width:200, height:200, marginTop: 100 ,alignSelf: 'center'}}>
                </Image>
            </View>

        </View>
        </ScrollView>
    )
}
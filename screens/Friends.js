import * as React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import { FontAwesome } from '@expo/vector-icons'; 


export default function Friends({navigation}){
    return(
    <View style={GlobalStyle.container}>
        <Text>This is your friends page</Text>
        <TouchableOpacity style={{
            alignItems:'center',justifyContent:'center',
            width:90,height:90,
            position:"absolute",bottom:10,right:20,
            borderWidth:2,borderRadius:50,
            backgroundColor:'white'}}
            onPress={()=>navigation.push('search')}
            >
        <FontAwesome name="search" size={60} color="black" />
        </TouchableOpacity>
    </View>
    </ScrollView>

)}
import * as React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import { FAB } from 'react-native-paper';


export default function Friends({navigation}){
    return(
    <View style={GlobalStyle.container}>
        <Text>This is your friends page</Text>

        <FAB
        onPress={()=>navigation.push('search')}
        style={GlobalStyle.fab}
        size={40}
        color="#fff"
        icon="account-search"
        />

    </View>

)}
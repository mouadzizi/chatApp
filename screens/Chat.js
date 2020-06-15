import * as React from 'react';
import {View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {GlobalStyle} from '../style/GlobalStyle';

export default function Chat(){
    return(
    <View style={GlobalStyle.container}>
        <Text>This is chat app</Text>
    </View>

)}
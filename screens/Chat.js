import React, {useState} from 'react';
import {Platform, KeyboardAvoidingView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat(){

    const [msg, setMsg] = useState("")
    const [usr, setUsr] = useState("")

    const chat = <GiftedChat messages = {msg} user={usr} />

    if ( Platform.OS === 'android'){
        return(
            <KeyboardAvoidingView style={{flex : 1}} behavior="padding" keyboardVerticalOffset={3} enabled>
                {chat}
            </KeyboardAvoidingView>
        )
    }
    return(
    <SafeAreaView style={{flex : 1}} >
        {chat}
    </SafeAreaView>

)}
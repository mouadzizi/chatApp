import React from React;
import {View, Text} from 'react-native';
import {db} from './firebaseConfig';
import * as firebase from 'firebase';

export default function chatData(){
    
    send = message =>{
        message.forEach(item => {
            const message = {
                text : item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user : item.user
            }

            db.push.message;
        });
    };


    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return{
            _id,
            createdAt,
            text,
            user
        };
    }

    get = callback => {
        db.goOnline('child_added', snapshot => callback(parse(snapshot)));
    };

    off(){
        db.off();
    }


}
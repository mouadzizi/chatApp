import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, ActivityIndicator,Dimensions } from 'react-native';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import { auth, db } from '../data/firebaseConfig';
import firebase from 'firebase';

import { Ionicons } from '@expo/vector-icons';

export default function Chat({ route }) {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const messagesRef = db.ref('messages/' + chatId());
  const WIDTH = Dimensions.get('screen').width/2;


  useEffect(() => {
    //start loading
    setLoading(true);
    //retrieve old messages
    loadMessages();
    setTimeout(() => {
      setLoading(false)
    }, 800);
    return () => {
      messagesRef.off();
      console.log("chat closed");
    }

  }, [])

  function chatId() {
    if (auth.currentUser.uid > route.params.item.key) return `${auth.currentUser.uid}-${route.params.item.key}`
    else return `${route.params.item.key}-${auth.currentUser.uid}`;

  }
  const loadMessages = () => {
    messagesRef.on('value', snap => {
      var items = [];
      snap.forEach(child => {
        const msg = child.val();
        items.push({
          _id: msg._id,
          createdAt: msg.createdAt,
          text: msg.text,
          received:msg.sent,
          user: msg.user,
        });
      });
      items.reverse()
      setMessages(items)
    });
    console.log(messages);

  }

  const onSend = useCallback((message = []) => {
    for (let i = 0; i < message.length; i++) {
      var now = new Date().getTime()
      messagesRef.push({
        _id: now,
        text: message[i].text,
        user: message[i].user,
        sent: true,
        guestName: route.params.item.name,
        guestUID: route.params.item.key,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }

  }, [])




  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
      <View style={{alignItems:'center'}} > 
      <ActivityIndicator style={{position:'absolute'}} size='large' color='black' animating={loading} />
      </View>
      {messages.length == 0 ?  <Image 
      style={{  
        width: 300,
        height: 100,
        alignSelf: 'center',
        flex: 1,}}
      source={require('../assets/slide2.jpg') }/> : null} 
      <GiftedChat
        
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                left: {
                  color: 'white',
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: '#9b59b6',
                },
              }}
            />
          );
        }}
        renderSend={
          props => <Send {...props} >
            <Ionicons style={{ marginRight: 8, marginBottom: 3 }} name="md-send" size={35} color="blue" />
          </Send>
        }
        messages={messages}
        user={{
          _id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
        }}
        onSend={messages => onSend(messages)} />
    </View>

  )
}
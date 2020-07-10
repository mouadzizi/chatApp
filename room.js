/*import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'
import Backend from './data/Backend';

export default class room extends Component {
  constructor(){
    super();
    this.state={
      load:false,
    }
  }
  state={
    messages:[],
  }
  componentDidMount(){
    this.setState({load:true});
    Backend.loadMessages(message=>{
      this.setState( previousState=> {
        return {
          messages:GiftedChat.append(previousState.messages,message),
          load:false,
        }
      })
    })
  }
  componentWillUnmount(){
    Backend.closeChat()
  }
  componentDidUpdate(){ 
  }
  render() {
    return (
      <View style={{flex:1}} >
        <ActivityIndicator animating={this.state.load} color="black" size='large' />
       <GiftedChat
          messages={this.state.messages}
          onSend={message => {
            Backend.sendMessage(message);
          }}
          user={{
            _id: Backend.getUid(),
            name: Backend.getUsername(),
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})*/

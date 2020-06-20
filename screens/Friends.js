import  React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import { Searchbar } from 'react-native-paper';

export default function Friends(){
    const [searchQuery, SetsearchQuery] = useState("")
    return( 
    <ScrollView style={{backgroundColor: 'white'}}>
    <View style={{flex : 1, backgroundColor:'white',}}> 
    <Searchbar  style={{paddingTop: 15}}
                placeholder="Search a friend by username"
                onChangeText={text => SetsearchQuery(text)}
                value={searchQuery}/>
    </View>
    </ScrollView>

)}
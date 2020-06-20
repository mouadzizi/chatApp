import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { Searchbar, Avatar } from 'react-native-paper';

export default function Home({navigation}){
    const [searchQuery, SetsearchQuery] = useState("")
    return(

        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{flex : 1, backgroundColor:'white',}}> 
            <View>
            <Searchbar
                style={{paddingTop: 15}}
                placeholder="Search"
                onChangeText={text => SetsearchQuery(text)}
                value={searchQuery}/>
            
            <TouchableOpacity
            style={{margin: 20, flexDirection:"row", alignContent: 'space-around'}}
            onPress={()=> navigation.push('ChatScreen')}>
             <Avatar.Text size={50} label="XD" />
             <Text style={{fontWeight: 'bold', marginTop: 15, marginLeft: 5}}>Test 1</Text>

            </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    )
}
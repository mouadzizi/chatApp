import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Searchbar, Avatar, Divider, List } from 'react-native-paper';
import { auth, db } from '../data/firebaseConfig';


export default function Home({ navigation }) {
    const [searchQuery, SetsearchQuery] = useState("");
    const [friends, setFriends] = useState([]);
    const [disc,setDisc]=useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const uid=auth.currentUser.uid;
    const friendsRef = db.ref('user/'+uid+'/friends');
    const msgs= db.ref('messages');

    

    useEffect(()=>{      
        

        loadFrineds()
        return () => friendsRef.off();
    },[]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadFrineds()
    }, [])

    const loadFrineds = ()=>{
        friendsRef.on('value',(snapShot)=>{
            console.log("loading firends");
            let fr=[];
            snapShot.forEach((child)=>{
                fr.push({
                    key:child.val().uid,
                    name:child.val().username,
                    email:child.val().email,
                });
                
            })
            setFriends(fr);
            
        })
        setRefreshing(false);
    }

    function handleTransition(item){
        navigation.push('ChatScreen',{item})
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View>
                <Searchbar
                    style={{ paddingTop: 15 }}
                    placeholder="Search"
                    onChangeText={text => SetsearchQuery(text)}
                    value={searchQuery} />
            </View>
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                style={{ width: '97%', marginTop: 10 }}
                data={friends}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            style={{ margin: 10, flexDirection: "row", alignContent: 'space-around' }}
                            onPress={() => handleTransition(item)}>

                            <List.Item
                                left={props => <Avatar.Text {...props} color={'white'} size={45}
                                    label={item.name.charAt(0)} />}
                            />
                            <Text style={{ fontWeight: 'bold', marginTop: 15, marginLeft: 5 }}>{item.name}</Text>
                            
                        </TouchableOpacity>
                        <Divider />
                    </View>
                )}
                
            />
        </View>

    )
}
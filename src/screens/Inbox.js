import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, FlatList, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';




const Inbox = ({ navigation }) => {
    // console.log(props);
    const myInbox = [
        {
            imagePath: require('../../assets/tony.jpg'),
            name: 'Tony Stark',
            messageText: 'Hey Kitty, how\'s the mrs?',
            id: '001'
        },
        {
            imagePath: require('../../assets/cap.jpg'),
            name: 'Steve Rogers',
            messageText: 'Sorry about the new shield...',
            id: '002'
        },
        {
            imagePath: require('../../assets/spidey.jpg'),
            name: 'Peter Parker',
            messageText: 'Rest easy King. Wakanda Forever.',
            id: '324'
        },
    ];



    const Item = ({ chatName, message, photo }) => (

        <View style={{ height: 85, width: '100%', borderBottomWidth: 2, backgroundColor: '#E4E4E4', borderBottomColor: 'black', flexDirection: 'row' }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image style={{ width: '60%', height: '75%', alignSelf: 'center', borderRadius: 150 }} source={photo} />
            </View>
            <View style={{ flexDirection: 'column', flex: 6 }}>
                <Text style={{ width: '100%', alignSelf: 'flex-start', fontSize: 20, justifyContent: 'center', }}>{chatName} </Text>
                <Text style={styles.profileText}>{message}</Text>
            </View>
        </View>

    );


    const renderItem = ({ item }) => (

        <Item chatName={item.name} message={item.messageText} photo={item.imagePath} />
    );

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={myInbox}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    );


    /*return (
 
         <View style={styles.scrollStyle}>
 
             <View style={styles.logoView}>
                 <Image source={require('../../assets/king.jpg')} style={styles.logoPic} />
             </View>
 
             <View style={styles.emailInputBox}>
 
                 <Text style={{ alignSelf: 'center', fontSize: 30 }}>Welcome, King</Text>
             </View>
             <View style={styles.nameInput}>
                 <View style={styles.nameInputBoxes}>
                     <Text style={{ width: '40%', alignSelf: 'center' }}>Firstname: </Text>
                     <Text style={styles.profileText}>Black</Text>
 
                 </View>
                 <View style={styles.nameInputBoxes} >
                     <Text style={{ width: '40%', alignSelf: 'center' }}>Lastname: </Text>
                     <Text style={styles.profileText}>Panther</Text>
 
                 </View>
 
                 <View style={styles.nameInputBoxes} >
                     <Text style={{ width: '40%', alignSelf: 'center' }}>Email: </Text>
                     <Text style={styles.profileText}>king.tchalla@wakanda.com</Text>
 
                 </View>
             </View>
             <View style={styles.buttonBox} >
                 <TouchableOpacity
                     onPress={() => {
                         navigation.navigate('Inbox');
                     }}
                     style={styles.buttonStyle}
                 >
                     <Text style={styles.buttonText}>Messages</Text>
                 </TouchableOpacity>
             </View>
 
 
 
         </View >
     );
     */
};

const styles = StyleSheet.create({
    scrollStyle: {
        width: '100%',
        height: '100%',
        borderColor: 'red',

        backgroundColor: 'white'

    },
    logoView: {
        flex: 2.25,
        width: '50%',
        height: '100%',
        borderRadius: 150,
        alignSelf: 'center',

        borderColor: 'blue',
        marginTop: '5%'

    },
    logoPic: {
        height: '100%',
        width: '100%',
        borderRadius: 150
    },
    nameInput: {
        flex: 1,
        height: 80,
        marginBottom: '5%',
        flexDirection: 'column',

        borderColor: 'grey',
        alignSelf: 'stretch'
    },
    nameInputBoxes: {
        flex: 1,
        marginRight: '3%',
        marginLeft: '3%',
        flexDirection: 'row',
        justifyContent: 'center',


        borderColor: 'orange'
    },
    nameBox: {
        height: 45,
        backgroundColor: 'white',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18
    },
    emailInputBox: {
        flex: 1,
        width: '70%',
        height: 80,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: 'purple'
    },
    emailBox: {
        height: 50,
        backgroundColor: 'black',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18
    },
    buttonBox: {
        flex: 1,
        width: '30%',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',

        borderColor: 'purple'
    },
    buttonStyle: {
        backgroundColor: 'black',
        height: '40%',
        justifyContent: 'center',
        borderRadius: 40
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center'
    },
    profileText: {
        width: '90%',
        alignSelf: 'center',

        flex: 3,
        paddingTop: 10,
        color: 'gray'
    }
});


export default Inbox;
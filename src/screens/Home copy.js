import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';





const Home = ({ navigation }) => {
    // console.log(props);
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = () => {
        if (regex.test({ email }.email)) {
            Alert.alert("Email Validation", "Email is Valid!");
            navigation.navigate('Info', { fName: { fName }.fName, lName: { lName }.lName, email: { email }.email });

        } else {
            Alert.alert("Email Validation", "Email is Invalid!");
        }

    }
    return (

        <ScrollView stickyHeaderIndices={[5]} invertStickyHeaders style={styles.scrollStyle}>

            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 60, borderWidth: 2, borderColor: 'orange', marginTop: 35 }}>
                <Text style={{ fontSize: 45, }}>Hello!</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >





            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={{ fontSize: 45, }}>Bottom Bar</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >



        </ScrollView >

    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0
    },
    logoView: {
        flex: 2,
        width: '85%',
        height: 450,

        alignSelf: 'center',

        marginTop: '-3%',
        marginBottom: '-18%'
    },
    logoPic: {
        height: '100%',
        width: '100%',


    },
    nameInput: {
        flex: 1,
        height: 80,
        marginBottom: '5%',
        flexDirection: 'row',

        borderColor: 'grey',
        alignSelf: 'stretch'
    },
    nameInputBoxes: {
        flex: 1,
        marginRight: '3%',
        marginLeft: '3%',
        justifyContent: 'center',
        justifyContent: 'space-evenly',


        borderColor: 'orange'
    },
    nameBox: {
        height: 45,
        backgroundColor: 'black',
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
        marginBottom: '5%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: 'purple',
        marginBottom: 25
    },
    emailBox: {
        height: 50,
        backgroundColor: 'white',
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    passwordInputBox: {
        flex: 1,
        width: '70%',
        height: 80,
        marginBottom: '5%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: 'purple',
        marginBottom: 25
    },
    passwordBox: {
        height: 50,
        backgroundColor: 'white',
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18,
    },

    buttonBox: {
        flex: 1,
        width: '63%',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '7%',
        borderColor: 'purple',
        marginTop: 30
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent'

    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
    },
    backIcon: {
        flex: 1,
        height: 80,
        marginBottom: '5%',
        flexDirection: 'row',

        width: '95%',
        borderColor: 'grey',
        alignSelf: 'center'
    },
});


export default Home;
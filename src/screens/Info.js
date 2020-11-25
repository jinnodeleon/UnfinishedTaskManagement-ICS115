import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';




const Info = ({ route, navigation }) => {
    // console.log(props);
    const { lName } = route.params;
    const { fName } = route.params;
    const { email } = route.params;
    return (

        <View style={styles.scrollStyle}>

            <View style={styles.logoView}>
                <Image source={require('../../assets/king.jpg')} style={styles.logoPic} />
            </View>

            <View style={styles.emailInputBox}>

                <Text style={{ alignSelf: 'center', fontSize: 30 }}>Welcome, {fName}</Text>
            </View>
            <View style={styles.nameInput}>
                <View style={styles.nameInputBoxes}>
                    <Text style={{ width: '45%', alignSelf: 'center' }}>Firstname: </Text>
                    <Text style={styles.profileText}>{fName}</Text>

                </View>
                <View style={styles.nameInputBoxes} >
                    <Text style={{ width: '45%', alignSelf: 'center' }}>Lastname: </Text>
                    <Text style={styles.profileText}>{lName}</Text>

                </View>

                <View style={styles.nameInputBoxes} >
                    <Text style={{ width: '45%', alignSelf: 'center' }}>Email: </Text>
                    <Text style={styles.profileText}>{email}</Text>

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
        width: '55%',
        alignSelf: 'center'
    }
});


export default Info;
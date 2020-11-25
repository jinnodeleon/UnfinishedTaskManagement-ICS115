import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';




const SignUp = ({ navigation }) => {
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

        <ScrollView style={styles.scrollStyle}>

            <View style={styles.nameInput}>
                <Text>Back Icon Here</Text>
            </View>

            <View style={{ flex: .5, alignSelf: 'center', width: '50%', alignItems: 'center', marginBottom: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 40, textShadowColor: 'lightgray', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 3 }}>Hello!</Text>
            </View>

            <View style={styles.nameInput}>
                <View style={styles.nameInputBoxes}>

                    <TextInput placeholder="Firstname" style={styles.nameBox} onChangeText={fName => setFName(fName)} />
                </View>
                <View style={styles.nameInputBoxes} >

                    <TextInput placeholder="Lastname" style={styles.nameBox} onChangeText={lName => setLName(lName)} />
                </View>
            </View>

            <View style={styles.emailInputBox}>

                <TextInput placeholder="Email" textContentType='emailAddress' style={styles.emailBox} onChangeText={email => setEmail(email)} />
            </View>
            <View style={styles.buttonBox} >
                <TouchableOpacity
                    onPress={() => {
                        verifyEmail();

                    }}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {

        borderColor: 'red',
        backgroundColor: 'white',
        paddingTop: 35
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
        backgroundColor: 'white',
        height: '80%',
        justifyContent: 'center',
        borderRadius: 40
    },
    buttonText: {
        color: 'black',
        alignSelf: 'center'
    }
});


export default SignUp;
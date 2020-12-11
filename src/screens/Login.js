import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';





const Login = ({ navigation, props }) => {
    // console.log(props);
    /*
    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    }); // try to get this to work 
    */
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    /**
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = () => {
        if (regex.test({ email }.email)) {
            Alert.alert("Email Validation", "Email is Valid!");
            navigation.navigate('Info', { fName: { fName }.fName, lName: { lName }.lName, email: { email }.email });

        } else {
            Alert.alert("Email Validation", "Email is Invalid!");
        }

    }     
     */


    return (

        <ScrollView style={styles.scrollStyle}>

            <View style={styles.logoView}>
                <Image source={require('../../assets/tasklist.png')} style={styles.logoPic} />
            </View>
            <View style={{ flex: .5, alignSelf: 'center', width: '50%', alignItems: 'center', marginBottom: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 40, textShadowColor: 'lightgray', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 3 }}>Hello!</Text>
            </View>

            <View style={{ flex: .5, alignSelf: 'center', width: '80%', alignItems: 'center', marginBottom: '10%' }}>
                <Text style={{ fontSize: 15, textAlign: 'center' }} > Make it easier for yourslelf to manage tasks and itime by using our app!</Text>
            </View>


            <View style={styles.buttonBox} >
                <LinearGradient colors={['#F7971E', '#FFD200']} start={[0, 1]} end={[1, 0]}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login2')
                        }}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={styles.buttonBox2} >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                    style={styles.buttonStyle2}
                >
                    <Text style={styles.buttonText2}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>




        </ScrollView >
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
        borderWidth: 2,
        borderColor: 'grey',
        alignSelf: 'stretch',

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
        fontSize: 18,

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
        width: '63%',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '7%',
        borderColor: 'purple'
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
    buttonBox2: {
        flex: 1,
        width: '63%',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',

        borderColor: 'purple'
    },
    buttonStyle2: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FBAF12',

    },
    buttonText2: {
        color: '#F89E1B',
        alignSelf: 'center',

    }
});


export default Login;
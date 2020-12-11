import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { createAccount } from '../reducers/actions';
import { connect } from 'react-redux';

const SignUpInfo = ({ navigation, route, createAccount }) => {
    // console.log(props);
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [user, setUser] = useState('');
    const { email, password } = route.params

    //console.log(route.params);

    return (

        <ScrollView style={styles.scrollStyle}>

            <View style={styles.backIcon}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp')

                    }}
                    style={styles.buttonStyle}
                >

                    <Icon name="chevron-left" style={{ fontSize: 30 }}></Icon>
                </TouchableOpacity>

            </View>

            <View style={{ flex: .5, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 60, }}>
                <Text style={{ fontSize: 45, }}>Hello!</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Create a new account </Text>
            </View >
            < View style={styles.emailInputBox} >
                <Text style={{ color: "gray" }}>First Name</Text>
                <TextInput placeholder="First Name" style={styles.emailBox} onChangeText={text => setFName(text)} />
            </View >
            <View style={styles.passwordInputBox}>
                <Text style={{ color: "gray" }}>Last Name</Text>
                <TextInput placeholder="Last Name" style={styles.passwordBox} onChangeText={text => setLName(text)} />
            </View>
            <View style={styles.passwordInputBox}>
                <Text style={{ color: "gray" }}>Username</Text>
                <TextInput placeholder="Username" style={styles.passwordBox} onChangeText={text => setUser(text)} />
            </View>
            <View style={styles.buttonBox} >
                <LinearGradient colors={['#F7971E', '#FFD200']} start={[0, 1]} end={[1, 0]}>
                    <TouchableOpacity
                        onPress={() => {

                            createAccount({
                                email: email,
                                password: password,
                                fName: fName,
                                lName: lName,
                                user: user
                            })

                            navigation.navigate('Login2')
                        }}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>


            <View style={{ flex: .5, alignSelf: 'center', width: '60%', marginTop: 80 }}>
                <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                    <Text style={{ flex: 2.25, }}>Already have an account? </Text>
                    <TouchableOpacity
                        style={{ flex: .75, alignItems: 'center' }}
                    >
                        <Text style={{ width: '75%', color: '#F89E1B' }} >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    scrollStyle: {

        borderColor: 'red',
        backgroundColor: 'white',
        paddingTop: 35,
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

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (credentials) => dispatch(createAccount(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUpInfo);
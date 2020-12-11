import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu'

import FAIcon from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';


import { createTask } from '../reducers/actions';
import { connect } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import firebase from '../config/firebase'

const Account = ({ navigation }) => {
    const { Popover } = renderers;

    const [details, setDetails] = useState();

    const uid = firebase.auth().currentUser;
    userEmail = uid.email;

    useEffect(() => {

        const displayTask = () => {
            const fb = firebase.firestore();
            fb.collection('users').where("email", "==", userEmail)
                .get()
                .then(function (query) {
                    query.forEach((doc) =>
                        console.log(doc.data())
                    )
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error)
                })
        }
        displayTask();
        //console.log(details);
    }, [])

    const logoutUser = () => {
        firebase.auth().signOut().then(function () {
            navigation.navigate('Login2')
        }).catch(function (err) {
            Alert.alert("Error", err);
        });
    }
    return (

        <View>
            <ScrollView stickyHeaderIndices={[0]} style={styles.scrollStyle} style={{ height: '100%', backgroundColor: 'white' }}>
                <View style={{ elevation: 5 }}>
                    <View style={{ height: 30, backgroundColor: 'white' }}></View>
                    <View style={{ alignSelf: 'center', height: 50, flexDirection: 'row', backgroundColor: 'white', alignContent: 'space-around' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-end', }}>
                            <Image
                                source={require('../../assets/Logo.png')}
                                style={{ width: '95%', height: '76%', }}
                            />
                        </TouchableOpacity>

                        <View style={{ flex: .8, flexDirection: 'row', alignItems: 'center', marginRight: '4%', alignSelf: 'center', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{}}
                            //  onPress={()=>{}}
                            >

                            </TouchableOpacity>
                            <TouchableOpacity style={{}}

                            >

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '90%', alignItems: 'flex-start', }}>
                    <Text style={{ fontSize: 30, }}>Profile</Text>

                </View>
                <Card containerStyle={{ width: '80%', alignSelf: 'center', borderRadius: 30, elevation: 4, }}>
                    <Card.Title style={{ height: 110, width: 110, borderRadius: 100, alignSelf: 'center', justifyContent: 'center', textAlignVertical: 'center', fontSize: 55, color: 'white', backgroundColor: '#C1DAFF' }}>
                        ME
                    </Card.Title>

                    <Text style={{ marginBottom: 10 }}>
                        Name:
                                </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Email:
                                </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Username:
                                </Text>
                </Card>
                <Card containerStyle={{ width: '80%', height: 85, alignSelf: 'center', justifyContent: 'center', borderRadius: 30, elevation: 4, }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Change Password</Text>
                        </View>
                        <View>
                            <FAIcon name="chevron-right" color="#FBB040" style={{ fontSize: 30 }} />
                        </View>
                    </View>
                </Card>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddContacts', { userEmail })}
                >
                    <Card containerStyle={{ width: '80%', height: 85, alignSelf: 'center', justifyContent: 'center', borderRadius: 30, elevation: 4, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text>View Contacts</Text>
                            </View>
                            <View>
                                <FAIcon name="chevron-right" color="#FBB040" style={{ fontSize: 30 }} />
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={logoutUser}
                >
                    <Card containerStyle={{ width: '80%', height: 85, alignSelf: 'center', justifyContent: 'center', borderRadius: 30, elevation: 4, marginBottom: 20 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text>Logout</Text>
                            </View>
                            <View>
                                <FAIcon name="chevron-right" color="#FBB040" style={{ fontSize: 30 }} />
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>

            </ScrollView>




        </View >

        // <ScrollView stickyHeaderIndices={[5]} invertStickyHeaders style={styles.scrollStyle}>
        //     <TouchableOpacity
        //         onPress={logoutUser}
        //     >
        //         <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 60, borderWidth: 2, borderColor: 'orange', marginTop: 35 }}>
        //             <Text style={{ fontSize: 45, }}>Sign Out</Text>
        //             <Text style={{ color: 'gray', fontSize: 20 }}>Sign out of the application</Text>
        //         </View>
        //     </TouchableOpacity>
        //     <TouchableOpacity
        //         onPress={() => navigation.navigate('AddContacts', {userEmail})}
        //     >
        //         <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 60, borderWidth: 2, borderColor: 'orange', marginTop: 35 }}>
        //             <Text style={{ fontSize: 45, }}>Sign Out</Text>
        //             <Text style={{ color: 'gray', fontSize: 20 }}>Add Contacts</Text>
        //         </View>
        //     </TouchableOpacity>
        // </ScrollView>

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


export default Account;
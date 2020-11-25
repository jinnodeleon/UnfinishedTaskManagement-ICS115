import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';

import FAB from 'react-native-fab'

import { FloatingAction } from "react-native-floating-action";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const clickHandler = () => {
    //function to handle click on floating Action Button
    alert('Floating Button Clicked');
};

const cardInfo = [
    {
        name: 'The Muffin Man Bakery',
        categories: 'Desserts, Cakes and Bakery',
        deliveryTime: '35 min',
        distance: '3.7 km',

    },
    {
        name: 'Central Perk Coffee House',
        categories: 'Beverages, Desserts, Cakes and Bakery',
        deliveryTime: '45 min',
        distance: '4.3 km',

    },
    {
        name: 'WildBread Bakery',
        categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
        deliveryTime: '25 min',
        distance: '3 km',
    },

];


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
        <View>
            <ScrollView stickyHeaderIndices={[0]} style={styles.scrollStyle}>
                <View style={{ elevation: 5 }}>
                    <View style={{ height: 30, backgroundColor: 'white' }}></View>
                    <View style={{ alignSelf: 'center', height: 50, flexDirection: 'row', backgroundColor: 'white', alignContent: 'space-around' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-end', }}>
                            <Image
                                source={require('../../assets/Logo.png')}
                                style={{ width: '95%', height: '76%', }}
                            />
                        </TouchableOpacity>
                        <View style={{ flex: .8, alignItems: 'flex-end', marginRight: '4%', justifyContent: 'center', }}>
                            <TouchableOpacity style={{ width: 43 }}>
                                <Icon name="cog" style={{ fontSize: 35 }}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignSelf: 'center', width: '90%', alignItems: 'flex-start', }}>
                    <Text style={{ fontSize: 45, }}>Due Soon</Text>
                </View >


                <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                </Text>

                </Card>
                <View style={{ flex: 1, alignSelf: 'center', width: '90%', alignItems: 'flex-start', marginTop: 35 }}>
                    <Text style={{ fontSize: 45, }}>Tasks</Text>
                </View >
                <View style={{ marginBottom: 50 }}>
                    <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>

                    </Card>
                    <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>

                    </Card>
                    <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>

                    </Card>
                    <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>

                    </Card>
                    <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>

                    </Card>


                </View>





            </ScrollView >
            <View style={{}}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,

                        height: 70,
                        bottom: 500,
                        left: 0,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                        elevation: 5
                    }}
                    onPress={() => {
                        navigation.navigate('List');

                    }}
                >
                    <Icon name="plus-circle" size={30} color="#01a699" />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {

        borderColor: 'red',
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        position: 'relative'
    },
    TouchableOpacityStyle: {
        //Here is the trick
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
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
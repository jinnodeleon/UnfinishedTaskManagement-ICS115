import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image, Modal, TouchableHighlight, Switch } from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components';


// import FAB from 'react-native-fab'

// import { FloatingAction } from "react-native-floating-action";

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
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





const Settings = ({ navigation }) => {
    // console.log(props);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false);


    const { Popover } = renderers;

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
        <View>
            <ScrollView stickyHeaderIndices={[0]} style={styles.scrollStyle} style={{ height: '100%', backgroundColor: 'white' }}>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: .2, }}>
                    <View style={{ height: 30, backgroundColor: 'white' }}></View>
                    <View style={{ alignSelf: 'center', height: 50, flexDirection: 'row', backgroundColor: 'white', alignContent: 'space-around', }}>
                        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-start', marginLeft: '4%' }}
                            onPress={() => {
                                navigation.navigate('Home');

                            }}
                        >
                            <FAIcon name="chevron-left" color="#333333" style={{ fontSize: 30 }}></FAIcon>
                        </TouchableOpacity>


                    </View>
                </View>
                <View style={{ flex: 1, alignSelf: 'center', width: '90%', alignItems: 'flex-start', marginTop: 30, marginBottom: 20 }}>
                    <Text style={{ fontSize: 30, }}>Settings</Text>
                </View >
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'space-evenly', marginTop: '4%', marginBottom: '4%' }}>
                    <View style={{ flex: 2, alignItems: 'center', }}>
                        <Text style={{ fontSize: 20 }}>Notify me when tasks are almost due</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', }}>
                        <Switch
                            trackColor={{ false: "red", true: "green" }}
                            thumbColor={isEnabled ? "white" : "white"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ marginRight: '10%' }}
                        />
                    </View>


                </View >
                <View style={{ width: '85%', borderBottomWidth: 1, borderBottomColor: '#77777', alignSelf: 'center', marginBottom: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', marginBottom: 15 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox1}
                                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                            />

                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18 }}>(n minutes/days/weeks) before due</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', marginBottom: 15 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox2}
                                onValueChange={(newValue) => setToggleCheckBox2(newValue)}

                            />

                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18 }}>(n minutes/days/weeks) before due</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', marginBottom: 15 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox3}
                                onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                            />

                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18 }}>(n minutes/days/weeks) before due</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', marginBottom: 15 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox4}
                                onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                            />

                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18 }}>(n minutes/days/weeks) before due</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', width: '85%', alignSelf: 'center', justifyContent: 'space-evenly', marginBottom: 15 }}>
                    <View style={{ flex: 1, }}>
                        <ScrollPicker

                            dataSource={[
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                                51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                            ]}
                            selectedIndex={1}
                            renderItem={(data, index, isSelected) => {
                                //
                            }}
                            onValueChange={(data, selectedIndex) => {
                                //
                            }}
                            wrapperHeight={110}
                            wrapperWidth={50}
                            wrapperBackground={'#FFFFFF'}
                            itemHeight={40}
                            highlightColor={'#d8d8d8'}
                            highlightBorderWidth={1}
                            activeItemColor={'#222121'}
                            itemColor={'#B4B4B4'}
                        />
                    </View>

                    <View style={{ flex: 1, }}>
                        <ScrollPicker

                            dataSource={[
                                'Minutes',
                                'Days',
                                'Weeks',

                            ]}
                            selectedIndex={1}
                            renderItem={(data, index, isSelected) => {
                                //
                            }}
                            onValueChange={(data, selectedIndex) => {
                                //
                            }}
                            wrapperHeight={110}
                            wrapperWidth={85}
                            wrapperBackground={'#FFFFFF'}
                            itemHeight={40}
                            highlightColor={'#d8d8d8'}
                            highlightBorderWidth={1}
                            activeItemColor={'#222121'}
                            itemColor={'#B4B4B4'}


                        />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22 }}>Before Due</Text>
                    </View>

                </View>
                <View style={styles.buttonBox} >
                    <LinearGradient colors={['#F7971E', '#FFD200']} start={[0, 1]} end={[1, 0]}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login2')
                            }}
                            style={styles.buttonStyle}
                        >
                            <Text style={styles.buttonText}>ADD</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>






            </ScrollView >

        </View>
    );
};


const test = {
    optionsContainer: {
        width: 125,
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },

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
        width: '20%',
        height: 50,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginBottom: '7%',
        borderColor: 'purple',
        marginRight: '8%'
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


export default Settings;
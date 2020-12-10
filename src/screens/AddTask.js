import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image, Switch } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../config/firebase';
import { createTask } from '../reducers/actions';
import { connect } from 'react-redux';

const AddTask = ({ navigation, createTask }) => {
    // console.log(props);

    const uid = firebase.auth().currentUser;
    const userID = uid.uid;

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const [due, setDue] = useState('sample');

    const [date, setDate] = useState(new Date());

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate
    //     setDate(currentDate);
    //     { currentDate ? setEnabled(false) : null }
    // };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    const [enabled, setEnabled] = useState(false);
    const toggleSwitch = () => setEnabled(!enabled);

    const dateHandler = (event, selectedDate) => {
        console.log(selectedDate)
        setDate(selectedDate)
        { selectedDate ? setEnabled(true) : setEnabled(false) }
    }

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

    // useEffect(() => {
    //     console.log(title)
    // }, [title])

    // useEffect(() => {
    //     console.log(task)
    // }, [task])

    return (

        <ScrollView stickyHeaderIndices={[5]} invertStickyHeaders style={styles.scrollStyle}>

            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 60, borderWidth: 2, borderColor: 'orange', marginTop: 35 }}>
                <TextInput
                    placeholder="Task Name"
                    onChangeText={(text) => {
                        setTitle(text)
                    }}
                />
            </View >

            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={styles.modalText}>Task Description</Text>
                <TextInput
                    placeholder="Description"
                    onChangeText={
                        (text) => {
                            setTask(text)
                        }
                    }
                />
            </View >

            <View style={{ flex: 1, alignSelf: 'center', width: '85%', alignItems: 'flex-start', borderWidth: 2, borderColor: 'orange' }}>
                <Text style={styles.modalText}>Due Date</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={enabled}
                />
                {enabled && (
                    <View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            // mode={showMode('date')}
                            is24Hour={true}
                            display="default"
                            onChange={dateHandler}
                        />
                        <TextInput
                            placeholder="Due Date"
                        />
                    </View>
                )}
            </View >

            <Button
                title="Add Task"
                onPress={() => {
                    try {
                        createTask(
                            {
                                title: title,
                                task: task,
                                due: due,
                                uid: userID
                            }
                        )
                        navigation.goBack()
                    } catch (error) {
                        Alert.alert(error)
                    }

                }}
            />

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

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask);
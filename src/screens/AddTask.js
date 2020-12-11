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

    const [startDate, setStartDate] = useState(new Date())

    //const [date, setDate] = useState(new Date());

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
    const toggleSwitch = () => setEnabled(previousState => !previousState);



    const setDate = (event, date) => {
        console.log(date)
        console.log(startDate)
        if (date === undefined) {
            toggleSwitch()
        }
        else {
            console.log('not same')
        }


    }
    // const dateHandler = (event, selectedDate) => {
    //     console.log(selectedDate)
    //     setDate(selectedDate)
    //     { selectedDate ? setEnabled(true) : setEnabled(false) }
    // }

    return (

        <ScrollView style={styles.scrollStyle}>

            <View style={styles.backIcon}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('List')

                    }}
                    style={styles.buttonStyle}
                >

                    <Icon name="chevron-left" style={{ fontSize: 30 }}></Icon>
                </TouchableOpacity>

            </View>

            <View style={{ flex: .5, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 60, }}>
                <Text style={{ fontSize: 45, }}>Add Task</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>Add a new task! </Text>
            </View >
            < View style={styles.emailInputBox} >
                <Text style={{ color: "gray" }}>Task Name</Text>
                <TextInput placeholder="Task Name" style={styles.emailBox} oonChangeText={(text) => { setTitle(text) }} />
            </View >
            <View style={styles.passwordInputBox}>
                <Text style={{ color: "gray", marginBottom: 15 }}>Description</Text>
                <TextInput multiline numberOfLines={5} placeholder="Description" style={styles.descriptionBox} onChangeText={
                    (text) => {
                        setTask(text)
                    }} />
            </View>
            <View style={styles.passwordInputBox}>
                <Text style={{ color: "gray" }}>Due Date</Text>
                <Switch
                    trackColor={{ false: "red", true: "green" }}
                    thumbColor={enabled ? "white" : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={enabled2}
                />
                {enabled && enabled2 && (
                    <View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={setStartDate}
                            //mode={showMode('date')}
                            is24Hour={true}
                            display="default"
                            onChange={setDate}
                        />
                    </View>
                )}
            </View>
            <View style={styles.buttonBox} >
                <LinearGradient colors={['#F7971E', '#FFD200']} start={[0, 1]} end={[1, 0]}>
                    <TouchableOpacity
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
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.buttonText}>ADD TASK</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>



        </ScrollView >



    );
};

const styles = StyleSheet.create({
    scrollStyle: {

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
    descriptionBox: {

        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black',
        borderWidth: 2,
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
        marginTop: '5%',
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
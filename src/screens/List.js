import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image, Modal, TouchableHighlight, FlatList} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import firebase from '../config/firebase';

const List = ({ navigation }) => {
    // console.log(props);
    const { Popover } = renderers;
    const uid = firebase.auth().currentUser;
    const userID = uid.uid;

    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const addTask = (uid, title, description) => {
        const fb = firebase.firestore();
        fb.collection('tasks').add({
            uid: userID,
            title: title,
            description: description,
            date: 'sample',
        })
        setModalVisible(!modalVisible);
    }

    const displayTask = () => {
        const fb = firebase.firestore();
        fb.collection('tasks').where("uid", "==", userID)
            .get()
            .then(function(query) {
                query.forEach(function(doc) {
                    console.log(doc.data().title);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            })
    }

    displayTask();

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

                        <View style={{ flex: .8, flexDirection: 'row', alignItems: 'center', marginRight: '4%', alignSelf: 'center', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{}}
                            //  onPress={()=>{}}
                            >
                                <Menu renderer={Popover} rendererProps={{ placement: 'bottom' }} onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger>
                                        <FIcon name="more-vertical" style={{ fontSize: 30, }}></FIcon>
                                    </MenuTrigger>

                                    <MenuOptions customStyles={test}>
                                        <MenuOption value={1} text='Replace Task'
                                            customStyles={{ optionText: { color: '#FEC507' } }}
                                        />
                                        <MenuOption value={2} text='Delete Task'
                                            customStyles={{ optionText: { color: '#DC5454' } }}
                                        />
                                    </MenuOptions>
                                </Menu>
                            </TouchableOpacity>
                            <TouchableOpacity style={{}}

                            >
                                <EIcon name="gear" style={{ fontSize: 35 }}></EIcon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '90%', alignItems: 'flex-start', }}>
                    <Text style={{ fontSize: 30, }}>All Tasks</Text>
                    <Text style={{ color: 'gray', alignSelf: 'center', fontSize: 28 }}> (n)</Text>
                </View>

                <View style={{ marginBottom: 50 }}>
                <Card containerStyle={styles.listCard}>
                        <Card.Title>hi</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            hello
                        </Text>
                        </Card>
                </View>
            </ScrollView>

            <View style={{}}>
                <TouchableOpacity
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 83,
                        height: 83,
                        bottom: 100,
                        left: '75%',
                        backgroundColor: '#FBB040',
                        borderRadius: 100,
                        elevation: 5
                    }}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
                    <FAIcon name="plus" size={45} color="white" />
                </TouchableOpacity>

            </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Task Name</Text>
            <TextInput 
                onChangeText={(text) => {
                    setTitle(text)
                }}
            />
            <Text style={styles.modalText}>Task Description</Text>
            <TextInput 
                onChangeText={
                    (text) => {
                        setDescription(text)
                    }
                }
            />
            <Text style={styles.modalText}>Due Date</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                addTask(userID, title, description)
              }}
            >
              <Text style={styles.textStyle}>Save</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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

    listCard: {
        borderRadius: 30,
        elevation: 4,
        marginBottom: 15
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 100,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

});


export default List;
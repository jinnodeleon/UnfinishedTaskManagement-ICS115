import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import firebase from '../config/firebase';
import { Card } from 'react-native-elements';
import { createContact } from '../reducers/actions';
import { connect } from 'react-redux';

const AddContacts = ({ navigation, route, createContact }) => {

    const [display, setDisplay] = useState([]);
    const { userEmail } = route.params;

    useEffect(() => {
        const list = [];

        const displayUsers = () => {
            const fb = firebase.firestore();
            fb.collection('users')
                .get()
                .then(function (query) {
                    query.forEach((doc) =>
                        //console.log(doc.data())
                        list.push(
                            doc.data()
                        )
                    );
                    setDisplay([...list])
                }).catch(function (error) {
                    console.log("Error getting documents: ",)
                })
        }
        displayUsers();

    }, [])
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
                    <Text style={{ fontSize: 30, }}>Contacts</Text>

                </View>
                <View>

                    <FlatList
                        style={{}}
                        data={display}
                        renderItem={({ item }) => (

                            // <TouchableOpacity 
                            // onPress={() => {

                            //     createContact({
                            //         userEmail: userEmail,
                            //         contactEmail: item.email
                            //     })

                            // }}
                            // >


                            <Card containerStyle={{ width: '85%', alignSelf: 'center', borderRadius: 30, elevation: 4, marginBottom: 8, marginTop: 4 }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Card.Title style={{ height: 55, width: 55, borderRadius: 100, alignSelf: 'center', justifyContent: 'center', textAlignVertical: 'center', fontSize: 20, color: 'white', backgroundColor: '#FFD0D0', marginBottom: 0, marginRight: 15 }}>
                                        ME
                                    </Card.Title>

                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ marginBottom: 2 }}>
                                                {item.fName} {item.lName}
                                            </Text>
                                            <Text style={{ marginBottom: 2 }}>
                                                @{item.user}
                                            </Text>
                                        </View>
                                        <Text style={{ marginBottom: 2 }}>
                                            {item.email}
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                            //</TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: (contactInfo) => dispatch(createContact(contactInfo))
    }
}

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

export default connect(null, mapDispatchToProps)(AddContacts);

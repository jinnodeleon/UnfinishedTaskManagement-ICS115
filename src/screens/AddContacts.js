import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import firebase from '../config/firebase';
import { Card } from 'react-native-elements';
import { createContact } from '../reducers/actions';
import { connect } from 'react-redux';

const AddContacts = ({navigation, route, createContact}) => {

    const [display, setDisplay] = useState([]);
    const {userDoc} = route.params;

    useEffect(() => {
        const list = [];

        const displayUsers = () => {
            const fb = firebase.firestore();
            fb.collection('users')
            .get()
            .then(function (query) {
                query.forEach((doc) => 
                    //console.log(doc)

                    list.push(
                        {
                            user: doc.data().user,
                            uid: doc.id
                        }
                    )                     

                );
                setDisplay([...list])
            }).catch(function (error) {
                console.log("Error getting documents: ", )
            })
        }
        displayUsers();

    }, [])
    /**
                     <TouchableOpacity
                    onPress = {() => {
                      
                        createContact({
                            userDoc: userDoc,
                            contactUser: item.user
                        })
                         
                    }}
                >
                <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                <Card.Title>{item.user}</Card.Title>
                <Card.Divider />
                </Card>
                </TouchableOpacity>
     */
    return (
        <View>
            <FlatList
                data={display}
                renderItem={({ item }) => (
                <Card containerStyle={{ borderRadius: 30, elevation: 4, }}>
                <Card.Title>{item.user}</Card.Title>
                <Card.Divider />
                </Card>
            )}
            />
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: (contactInfo) => dispatch(createContact(contactInfo))
    }
}

export default connect(null, mapDispatchToProps)(AddContacts);

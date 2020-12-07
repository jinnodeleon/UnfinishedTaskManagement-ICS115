import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import { auth } from '../config/firebase'

const Login2 = ({ navigation }) => {
  // console.log(props);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [pword, setPword] = useState('');

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const verifyEmail = () => {
    if (regex.test({ email }.email)) {
      Alert.alert("Email Validation", "Email is Valid!");
      // navigation.navigate('Info', { fName: { fName }.fName, lName: { lName }.lName, email: { email }.email });

    } else {
      Alert.alert("Email Validation", "Email is Invalid!");
    }

  }

  const loginUser = (email, pass) => {
    verifyEmail()
    auth().signInWithEmailAndPassword(email.trim(), pass)
      .then(() => {
        var user = auth().currentUser;
        if (user != null) {
          curUser = {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
          }
          console.log(curUser)
          navigation.navigate('Home')
          setEmail('')
          setPword('')
        }
      })
      .catch((err) => {
        Alert.alert("Error", err)
      })
  }

  return (

    <ScrollView style={styles.scrollStyle}>

      <View style={styles.backIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')

          }}
          style={styles.buttonStyle}
        >

          <Icon name="chevron-left" color="#333333" style={{ fontSize: 30 }}></Icon>
        </TouchableOpacity>

      </View>

      <View style={{ flex: .5, alignSelf: 'center', width: '85%', alignItems: 'flex-start', marginBottom: 110, }}>
        <Text style={{ fontSize: 45, }}>Welcome!</Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Sign in to proceed </Text>
      </View >
      {/*
            <View style={styles.nameInput}>
                <View style={styles.nameInputBoxes}>

                    <TextInput placeholder="Firstname" style={styles.nameBox} onChangeText={fName => setFName(fName)} />
                </View>
                <View style={styles.nameInputBoxes} >

                    <TextInput placeholder="Lastname" style={styles.nameBox} onChangeText={lName => setLName(lName)} />
                </View>
            </View>
            */}
      < View style={styles.emailInputBox} >
        <Text style={{ color: "gray" }}>Email</Text>
        <TextInput placeholder="Email" textContentType='emailAddress' style={styles.emailBox} value={email} onChangeText={setEmail} />
      </View >
      <View style={styles.passwordInputBox}>
        <Text style={{ color: "gray" }}>Password</Text>
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.passwordBox} value={pword} onChangeText={setPword} />
      </View>

      <View style={styles.buttonBox} >
        <LinearGradient colors={['#F7971E', '#FFD200']} start={[0, 1]} end={[1, 0]}>
          <TouchableOpacity
            onPress={() => {
              loginUser(email, pword)
            }}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={{ flex: .5, alignSelf: 'center', width: '60%', }}>

        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => {
            verifyEmail();

          }}

        >
          <Text style={{ color: '#F89E1B' }} >Forgot Password?</Text>
        </TouchableOpacity>

      </View>

      <View style={{ flex: .5, alignSelf: 'center', width: '60%', marginTop: 119 }}>
        <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
          <Text style={{ flex: 2.25, }}>Don't have an account? </Text>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => {
              verifyEmail();

            }}

          >
            <Text style={{ width: '95%', color: '#F89E1B' }} >Sign Up</Text>
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
    marginBottom: '2%',
    borderColor: 'purple',
    marginTop: 45
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


export default Login2;
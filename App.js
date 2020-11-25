import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Login2 from './src/screens/Login2';
import SignUpInfo from './src/screens/SignUpInfo';
import Home from './src/screens/Home';
import List from './src/screens/List';
import Chat from './src/screens/Chat';
import Account from './src/screens/Account';
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'format-list-checkbox' : 'format-list-checkbox';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chat-outline' : 'chat-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'account-outline' : 'account-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FEC507',
        inactiveTintColor: '#333333',
      }}
    >

      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>


  );
}

export const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpInfo" component={SignUpInfo} options={{ headerShown: false }} />
        <Stack.Screen name="Login2" component={Login2} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default App;

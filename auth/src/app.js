import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/loginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDyFAfhdzTIVaqZKNCSufs1YD3WwHu3ong',
            authDomain: 'react-native-auth-3975c.firebaseapp.com',
            databaseURL: 'https://react-native-auth-3975c.firebaseio.com',
            projectId: 'react-native-auth-3975c',
            storageBucket: 'react-native-auth-3975c.appspot.com',
            messagingSenderId: '73366156819'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
};

export default App;
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/loginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDyFAfhdzTIVaqZKNCSufs1YD3WwHu3ong',
            authDomain: 'react-native-auth-3975c.firebaseapp.com',
            databaseURL: 'https://react-native-auth-3975c.firebaseio.com',
            projectId: 'react-native-auth-3975c',
            storageBucket: 'react-native-auth-3975c.appspot.com',
            messagingSenderId: '73366156819'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                </CardSection>
            </Card>
            );
            case false: 
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }

        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }

      
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
require('./main.scss');

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC1k2h6iwLCFv5bEKUDr2U5eecM0FYccBs",
    authDomain: "simple-group-chat.firebaseapp.com",
    databaseURL: "https://simple-group-chat.firebaseio.com",
    storageBucket: "simple-group-chat.appspot.com",
    messagingSenderId: "775527216452"
};
firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: false,
                name: '',
                email: '',
                photoUrl: '',
                uid: '',
                text: '',
                date: ''
            };
        }

        componentDidMount() {

          let myArray = [];

            firebase.database().ref('/messages').on('child_added', (snapshot, prevChildKey) => {
                const messages = snapshot.val();
                console.log(messages);
                //console.log(prevChildKey);
                myArray.push(messages);

                if (messages[prevChildKey] != null) {
                    return;
                }
                messages[prevChildKey] = messages;
                this.setState({messages: myArray});
            });

            // firebase.database().ref('/messages').on('child_removed', (snapshot, prevChildKey) => {
            //     delete messages[prevChildKey];
            //     this.setState({messages: messages});
            // });
        }
        sendMessage = (data) => {
            var user = firebase.auth().currentUser;
            var name,
                email,
                photoUrl,
                uid,
                emailVerified;
            if (user != null) {
                var messageListRef = firebase.database().ref('/messages');
                var newMessageRef = messageListRef.push();
                newMessageRef.set({name: user.displayName, email: user.email, photoUrl: user.photoURL, uid: user.uid, text: data.text});
                this.setState({
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                    uid: user.uid,
                    text: data.text,
                    date: new Date().toUTCString()
                });

            }
        }

        updateState = () => {
            this.setState({login: true})
        }

        render() {

            if (this.state.login === false) {
                return (<Login updateState={this.updateState}/>)

            } else {
                return (
                    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <div>
                            <AppBar title="Awesome Chat App"/>
                            <div style={{
                                display: 'flex',
                                flexFlow: 'row wrap',
                                maxWidth: 1200,
                                width: '100%',
                                margin: '30px auto 30px'
                            }}>
                            <MessageList valueMessage={this.state.messages}/>
                            </div>

                            <MessageBox sendMessage={this.sendMessage}/>
                        </div>
                    </MuiThemeProvider>
                );

            }

        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});

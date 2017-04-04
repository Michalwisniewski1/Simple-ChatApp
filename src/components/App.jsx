import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
require('../sass/main.scss');
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

var config = {
    apiKey: "AIzaSyC1k2h6iwLCFv5bEKUDr2U5eecM0FYccBs",
    authDomain: "simple-group-chat.firebaseapp.com",
    databaseURL: "https://simple-group-chat.firebaseio.com",
    projectId: "simple-group-chat",
    storageBucket: "simple-group-chat.appspot.com",
    messagingSenderId: "775527216452"
};
firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                messages: [],
                login: false,
                name: '',
                email: '',
                photo: '',
                uid: '',
                text: '',
                date: '',
                userId: ''
            };

        }

        getUserData = (name, photo, userId) => {
            this.setState({name: name, photo: photo, userId: userId});
        }

        getDatabase = (messages) => {
            let user = firebase.auth().currentUser;
            this.ref = firebase.database().ref("messages");
            this.ref.limitToLast(10).on('value', (snapshot) => {
                const messages = snapshot.val();
                var data = Object.values(messages);
                if (messages != null) {
                    this.setState({messages: data});
                }

            });
        }

        sendMessage = (data) => {
            let user = firebase.auth().currentUser;
            let name,
                email,
                key,
                photoUrl,
                uid,
                emailVerified;
            if (user != null) {
                const messageListRef = firebase.database().ref('messages');
                const newMessageRef = messageListRef.push();
                newMessageRef.set({
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                    uid: user.uid,
                    text: data.text,
                    date: new Date().toLocaleString()
                });
                this.setState({
                    name: user.displayName,
                    email: user.email,
                    key: user.key,
                    photoUrl: user.photoURL,
                    uid: user.uid,
                    text: data.text,
                    date: new Date().toLocaleString()
                });

            }
        }

        updateState = () => {
            this.setState({login: true})
        }

        render() {

            if (this.state.login == false) {
                return (<Login getDatabase={this.getDatabase} getUserData={this.getUserData} updateState={this.updateState}/>)

            } else {
                return (
                    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <div>
                            <AppBar title='Simple Chat App' showMenuIconButton={false}>
                                <Chip backgroundColor={'#303030'} style={{
                                    height: '32px',
                                    marginTop: '15px'
                                }}><Avatar src={this.state.photo}/>
                                    Logged as {this.state.name}
                                </Chip>
                            </AppBar>
                            <div style={{
                                display: 'flex',
                                flexFlow: 'row wrap',
                                maxWidth: 1200,
                                width: '100%',
                                margin: '30px auto 30px'
                            }}>
                                <MessageList userIdInfo={this.state.userId} valueMessage={this.state.messages}/>
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

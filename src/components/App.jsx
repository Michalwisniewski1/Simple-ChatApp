import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
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
              messages: '',
            }
        }

        componentDidMount() {
          firebase.database().ref('/messages').on('value', (dataSnapshot) => {
            const messagesVal = dataSnapshot.val();
            const messages = _(messagesVal) //use lodash to wrap an item immediately
                .keys() //take all keys inside the objext
                .map((messageKey)=>{ //take all items in object
                  var cloned = _.clone(messagesVal[messageKey]); //clone each object in the array
                  cloned.key = messageKey; //set unique key to objects
                  return cloned;
                })
                .value(); //call value function to tell it to start evaluatin the chain
                console.log(messages);
              this.setState({messages: messages})
          });
        }
        sendMessage = (data) => {
          firebase.database().ref('/messages').push(data)
        }
        render() {
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
                            <ChannelList/>
                            <MessageList valueMessage={this.state.messages} />
                        </div>
                        <MessageBox sendMessage={this.sendMessage}/>
                    </div>
                </MuiThemeProvider>
            );
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});

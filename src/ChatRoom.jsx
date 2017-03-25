import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import MessageList from './MessageList.jsx';

var config = {
    apiKey: "AIzaSyC1k2h6iwLCFv5bEKUDr2U5eecM0FYccBs",
    authDomain: "simple-group-chat.firebaseapp.com",
    databaseURL: "https://simple-group-chat.firebaseio.com",
    storageBucket: "simple-group-chat.appspot.com",
    messagingSenderId: "775527216452"
};
firebase.initializeApp(config);

class ChatRoom extends React.Component {

    constructor(props, content) {
        super(props, content);
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {
            message: '',
            messages: []
        };
    }

    updateMessage(event) {
        console.log('Wrote : ' + event.target.value);
        this.setState({message: event.target.value});
    }

    submitMessage(event) {
        console.log('Sent message : ' + this.state.message);

        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }
        firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)

    }

    componentDidMount() {
        console.log('componentDidMount');

        firebase.database().ref('messages/').on('value', (snapshot) => {
            const currentMessages = snapshot.val(); // download messages

            if (currentMessages != null) {
                this.setState({messages: currentMessages});
            }

        });
    }

    render() {
        const currentMessage = this.state.messages.map((message, index) => {
            return <div>
                <li key={message.id}>
                    {message.text}
                </li>
            </div>
        });

        return (
            <div>
                <h1>Napisz wiadomość w poniższym polu</h1>
                <ol>
                    {currentMessage}
                </ol>
                <input onChange={this.updateMessage} type='text' placeholder='Write here'/>
                <button onClick={this.submitMessage}>Wyślij</button>
            </div>
        )
    }
}

export default ChatRoom;

import React from 'react';
import Card from 'material-ui/Card';
import CardText from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            photo: '',
            messages: [],
            userId: ''
        };
    }

    onClick = () => {

        var auth = firebase.auth();

        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            // User signed in!
            event.preventDefault();
            var token = result.credential.accessToken;
            var user = result.user;
            const userId = user.uid;
            const name = user.displayName;
            const photo = result.user.photoURL;
            this.setState({name: name, photo: photo, userId: userId});
            this.props.updateState();
            this.props.getUserData(name, photo, userId);
            this.props.getDatabase();
            alert('Witaj ' + this.state.name);
        }).catch(function(error) {
            console.log(error);
            var errorMessage = error.message
            console.log(errorMessage);
        });
    }

    render() {

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card style={{
                    'maxWidth': '800px',
                    'margin': '30px auto',
                    'padding': '50px'
                }}>
                    <CardText style={{
                        'textAlign': 'center'
                    }}>
                        To start chatting away, please login with your Google Account!.
                    </CardText>

                    <RaisedButton style={{
                        display: 'block'
                    }} onClick={this.onClick.bind(this)} label="Log in with Google" primary={true}/>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default Login;

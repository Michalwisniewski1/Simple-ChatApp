import React from 'react';
import Card from 'material-ui/Card';
import CardText from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    onClick() {

        var auth = firebase.auth();

        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            // User signed in!
            event.preventDefault();
            var token = result.credential.accessToken;
            var user = result.user;
            const name = user.displayName;
            const photo = result.user.photoURL;
            console.log(result);
            this.setState({name: name});
            this.props.updateState();
            alert('Witaj ' + this.state.name);
        }).catch(function(error) {
            console.log(error);
            var errorMessage = error.message
            console.log(errorMessage);
        });
    }

    getUserData() {
        var user = firebase.auth().currentUser;
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
        // } else {
        //     return (
        //         <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        //             <CardText style={{
        //                 'textAlign': 'center',
        //                 'margin': '30px auto',
        //                 'padding': '50px'
        //             }}>
        //                 <RaisedButton style={{
        //                     display: 'block'
        //                 }} onClick={this.moveToApp} label={'Welcome'} primary={true}/>
        //             </CardText>
        //         </MuiThemeProvider>
        //     );

    }
}

export default Login;

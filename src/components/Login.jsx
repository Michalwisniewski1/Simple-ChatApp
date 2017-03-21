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

    onClick() {
      console.log(this.props);

        var auth = firebase.auth();

        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            // User signed in!
            event.preventDefault();
            console.log('Udało się zalogować!');
            var token = result.credential.accessToken;
            var user = result.user;
            const name = user.displayName;
            this.props.updateState();
            alert('Witaj ' + name);
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

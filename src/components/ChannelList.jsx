import React from 'react';
import ReactDOM from 'react-dom';
import Channel from './Channel.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import * as firebase from 'firebase';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: this.props.valueInfos
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({infos: nextProps.valueInfos});
    }
<<<<<<< HEAD
=======
    getUser(){
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              console.log(user);
          } else {
              // No user is signed in.
          }
      });
    }
>>>>>>> d09951b0cd40a48841a3ed745ab41cd70909e4e6

    render() {

        console.log(this.state.infos);
        const channelNodes = (this.state.infos).map((info, indexz) => {
            return (

                <Channel user={info.name} photoUrl={info.photoUrl} key={indexz}></Channel>

            );
        });
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Card style={{
                        flexGrow: 2,
                        width: 500
                    }}>
                        <List>
                            {channelNodes}
                        </List>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ChannelList;

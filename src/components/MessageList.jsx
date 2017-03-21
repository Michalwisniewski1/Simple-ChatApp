import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import _ from 'lodash';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.valueMessage
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({messages: nextProps.valueMessage});
    }

    render() {
      console.log(this.state.messages);
        var messageNodes = this.state.messages.map((message) => {
            return (
                <div>
                    <Message message ={message.message} user={message.name} photoUrl={message.photoUrl}></Message>
                </div>
            );
        });

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Card style={{
                        width: '1200px'
                    }}>
                        <List>
                            {messageNodes}
                        </List>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default MessageList;

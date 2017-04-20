import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
require('../sass/main.scss');


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
        const messageNodes = (this.state.messages).map((message, index) => {
            return (

                <Message message={message.text} date={message.date} user={message.name} userId={message.uid} userIdInfo={this.props.userIdInfo} photoUrl={message.photoUrl} key={index}></Message>

            );
        });
        return (
            <div className='wrapper'>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Card className='messageList'>
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

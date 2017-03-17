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
            messages: []
        };
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        messages: nextProps.valueMessage
      });
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (<Message message={message.text}/>);
        });

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Card style={{
                        flexGrow: 2,
                        marginLeft: 30
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

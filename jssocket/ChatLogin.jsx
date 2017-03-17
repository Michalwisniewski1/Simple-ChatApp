import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from './ChatRoom.jsx';

class ChatLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            login: false
        };
        this.handleLoginButtonAction = this.handleLoginButtonAction.bind(this);
        this.handleChangeInputUsername = this.handleChangeInputUsername.bind(this);
    }

    handleLoginButtonAction = () => {
        event.preventDefault();
        console.log(this);
        this.setState({login: true, username: this.state.username});
    }

    handleChangeInputUsername = (event) => {
        this.setState({username: event.target.value});
    }

    render() {

        if (this.state.login === false) {
            return <div>
                <div className="loginData">
                    <h1>Zaloguj się zanim skorzystasz z czatu {this.state.username}</h1>
                    <input type='text' placeholder='Jan Kowalski' value={this.state.username} onChange={this.handleChangeInputUsername}/>
                    <button onClick={this.handleLoginButtonAction}>Login</button>
                    <h2>Witaj {this.state.username}</h2>

                </div>
            </div>
        } else {
            return <div>
                <ChatRoom/>
            </div>
        }
    }
}

export default ChatLogin

import React from 'react';
import ReactDOM from 'react-dom';
import ChatLogin from './ChatLogin.jsx';
import firebase from 'firebase';

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {

        render() {
            return (
                <div>
                    <ChatLogin/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});

import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js';

class MainComponent extends React.Component {

    render(){
        return (
            <div className="container">
                <UserList />
            </div>
        )
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('app')
)

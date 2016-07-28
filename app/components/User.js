import React from 'react';

export default class User extends React.Component {

    render() {
        return (
            <li>
                <img src={this.props.img} alt="avatar" />
                <div className="about">
                    <i className="fa fa-trash-o" onClick ={this.props.handleRemoveUser}></i>
                    <div className="name">{this.props.name}</div>
                    <div className="status">
                        <i className="fa fa-circle"></i> {this.props.status}
                    </div>
                </div>
            </li>
        )
    }
}
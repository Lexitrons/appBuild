import React from 'react';
import $ from 'jQuery';
import {Router , transitionTo } from 'react-router'

export default class ProfileContainer extends React.Component {

    constructor(props) {
        super( props );

        this.state = {
            
        };
        console.log( this.props );
        
    }

    componentWillMount() {

    }

    _createAccount(e) {

    }

    render() {

        return  (
            <div className="main-container">
                Profile Page     
            </div>
        )
    }
}
import React from 'react';
import $ from 'jQuery';
import {Router , transitionTo } from 'react-router';
import CreateAccount from '../components/Login/CreateAccount';

export default class CreateContainer extends React.Component {

    constructor(props) {
        super( props );

        this.state = {
            
        };

        this._createAccount = this._createAccount.bind( this );
    }

    componentWillMount() {

    }

    _createAccount(e) {
        e.preventDefault()
        let target = $( e.target )[0]
        console.log( target)

        $.ajax({
            type: "POST",
            url: "/api/createUser.php",
            data: {
                firstname: target[0].value,
                lastname: target[1].value,
                username: target[2].value,
                password: target[3].value,
                verify: target[4].value
            },
            dataType: "json",
            beforeSend: function() {
                console.log( this.data )
            },
            success: function (response){
                console.log( response )
                if(response.success ) {
                    history.pushState(null, "/profile");
        
                }
            },
            error: function (xhr, status, thrown){
                console.log( status );
            }
        })
    }

    render() {

        return  (
            <div className="main-container">
                <CreateAccount 
                    name={"Blah"}
                    submit={this._createAccount}
                />        
            </div>
        )
    }
}
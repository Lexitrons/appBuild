import React from 'react';
import $ from 'jQuery';
import {Router , transitionTo } from 'react-router';

// import componentNAME from 'components/<%= reactClass %>/';
import LoginForm from '../components/Login/LoginForm';

import Smile from '../components/svg/Smile';
import Sad from '../components/svg/Sad';

export default class Login extends React.Component {

    constructor(props) {
        super( props );

        this.state = {
            loading: false,
            success: "",
            message: ""
        };

        this._onSubmit = this._onSubmit.bind( this );
    }

    componentWillMount() {

    }

    _onSubmit(e) {
        e.preventDefault()
        let target = $( e.target )[0]
        console.log( target)
        let _this = this;
        $.ajax({
            type: "POST",
            url: "/api/login.php",
            data: {
                username: target[0].value,
                password: target[1].value
            },
            dataType: "json",
            beforeSend: function() {

                _this.setState({
                    loading: true
                })

            },
            success: function (response){
                console.log( response );
                
                _this.setState({
                    loading: false,
                    success: response.success,
                    message: response.message
                });
                
                if(response.success ) {
                    

                    // setTimeout( function() {
                    //     _this.router.push( 'profile', {user: response.reuslts.username } );
                    // }, 1000)
                    
                } else {
                }

            },
            error: function (xhr, status, thrown){
                console.log( status );
            }
        })
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
            },
            error: function (xhr, status, thrown){
                console.log( status );
            }
        })
    }

    render() {
        console.log(this.state )

        return  (
            <div className="main-container">
                <div className="login">
                    <h1 className="login__title">Login</h1>
                    <LoginForm 
                        name={"Blah"}
                        submit={this._onSubmit}
                    />  

                    {this.state.success !== "" &&
                        <div className={"login-message " + (this.state.success ? "login-message--success" : "login-message--error")}>
                            {this.state.success &&
                                <Smile />
                            }

                            {!this.state.success &&
                                <Sad />
                            }
                            <p className="login-message__text">{this.state.message}</p>
                        </div>   
                    }
                </div>
            </div>
        )
    }
}
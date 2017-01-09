import React from 'react';
import {Link} from  "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 
// import componentNAME from 'components/<%= reactClass %>/';
 
export default class Home extends React.Component {

    constructor(props) {
        super( props );

        this.state = {
           
        };
    }

    componentWillMount() {
    
    }

    render() {

        return  (
            <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'page-appear',
                    enterActive: 'page-appear-active',
                    leave: 'page-leave',
                    leaveActive: 'page-leave-active',
                    appear: 'page-appear',
                    appearActive: 'page-appear-active'
                }}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={300}
                transitionLeave={true}
                transitionAppear={true}
                component='div' 
                className="main-inner home-hero__wrap">
                
                <div className="home-hero">
                    
                    <h1 className="home-hero__title">Checking the App. </h1>
                    <p className="home-hero__subtitle">Login if you have created an account, or sign up for one.</p>
                    
                    <Link to='/login'className='home-hero__button'>
                      	<span >Login</span>
                    </Link>

                    <Link to='/create-account'className='home-hero__button'>
                      	<span >Create Account</span>
                   	</Link>
                </div>

        	</ReactCSSTransitionGroup>
        )
    }
}


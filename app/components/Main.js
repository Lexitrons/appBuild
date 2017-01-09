import React from 'react';
 
// import componentNAME from 'components/<%= reactClass %>/';
 
export class Main extends React.Component {

    constructor(props) {
        super( props );

        this.state = {
           
        };

 
    }

    componentWillMount() {
    
    }

    render() {

        return  (
            <div className="main-container">
                {this.props.children}
            </div>)
    }
}
import React from 'react';
import LoginComponent from './login-component';

class AppComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <LoginComponent />
        );
    }
}

export default AppComponent;
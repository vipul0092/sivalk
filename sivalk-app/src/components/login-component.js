import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputUserId" className="sr-only">Password</label>
                <input type="text" id="inputUserId" className="form-control" placeholder="Your User Id" required="" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        );
    }
}

export default LoginComponent;

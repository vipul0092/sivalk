import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Hey {this.props.userId}, Welcome to Sivalk</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.props.logOutUser}>Logout!</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}

Header.propTypes = {
    userId: PropTypes.string.isRequired,
    logOutUser: PropTypes.func.isRequired
};

export default Header;

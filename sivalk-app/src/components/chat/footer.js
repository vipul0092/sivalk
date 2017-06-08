import React from 'react';
import Styles from './less/chat.less';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="customFooter">
                <div className="container">
                    <input type="text" id="inputMessage" className="form-control twentyMargin" placeholder="Enter message..." required=""
                        ref={node => this.userIdInput = node} />
                </div>
            </footer>
        );
    }

}

export default Footer;

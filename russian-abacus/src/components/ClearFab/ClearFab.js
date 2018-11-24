import React, { Component } from 'react';
import './ClearFab.css'

import add_icon from './add.svg'

class ClearFab extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="ClearFab">
                <img src={add_icon} alt="+" />
            </div>
        );
    }
}

export default ClearFab;
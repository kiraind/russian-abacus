import React, { Component } from 'react';
import './AddFab.css'

import add_icon from './add.svg'

class AddFab extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="AddFab">
                <img src={add_icon} alt="+" />
            </div>
        );
    }
}

export default AddFab;
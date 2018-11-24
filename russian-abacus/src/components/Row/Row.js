import React, { Component } from 'react';
import './Row.css'

const die_width = 33.75

const Die = ({ taken, shift, dark, index, mutate }) => {
    let style = {}

    if(taken) {
        style.left = shift
    } else {
        style.right = shift
    }
    return (
        <div
            className={"Die" + (dark ? " dark" : " light")}
            style={style}
            onClick={() => mutate(index)}
        />
    )
}

class Row extends Component {
    isDark(i) {
        if(this.props.count === 10) {
            return i === 4 || i === 5
        } else if(this.props.count === 4) {
            return i === 1 || i === 2
        }
    }

    render() {
        const { taken, count, index, mutate } = this.props
        
        const dice = []
        let l_shift = 0
        let r_shift = die_width * (count - 1 - taken)

        for(let i = 0; i < count; i++) {
            dice.push(
                <Die 
                    taken={i < taken}
                    shift={i < taken ? l_shift : r_shift}
                    dark={this.isDark(i)}
                    mutate={mutate.bind(null, index)}
                    index={i}
                    key={i}
                />
            )

            if(i < taken) {
                l_shift += die_width
            } else {
                r_shift -= die_width
            }
        }

        return (
            <div className="Row">
                <div className="Rail"></div>

                {dice}
            </div>
        );
    }
}

export default Row;
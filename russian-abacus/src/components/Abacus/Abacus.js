import React, { Component } from 'react';
import './Abacus.css'

import Row from './../Row/Row'

function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
        x: box.left + window.pageXOffset,
        y: box.top + window.pageYOffset
    }
}

class Abacus extends Component {
    constructor(props) {
        super(props)

        const rows = []
        for(let i = 0; i < this.props.rows; i++)
            rows.push({
                count: this.props.quaters && (i === this.props.rows - 3) ? 4 : 10,
                taken: 0
            })

        this.state = {
            rows,
            position: {
                x: document.body.offsetWidth / 2,
                y: document.body.offsetHeight / 2
            }
        }

        this.mutate = this.mutate.bind(this)
        this.onmousedown = this.onmousedown.bind(this)
    }

    componentDidMount() {
        this.refs.body.ondragstart = () => false

        this.setState({
            position: {
                x: document.body.offsetWidth / 2 - this.refs.body.offsetHeight / 2,
                y: document.body.offsetHeight / 2 - this.refs.body.offsetHeight / 2
            }
        })
    }

    mutate(row, i) {
        const { rows } = this.state
        const being_untaken = rows[row].taken > i

        let diff = 0

        if(being_untaken) {
            diff = -(rows[row].taken - i)
        } else {
            diff = -(rows[row].taken - i - 1)
        }
        
        this.setState({
            rows: [
                ...rows.slice(0, row),
                {
                    count: rows[row].count,
                    taken: rows[row].taken + diff,
                },
                ...rows.slice(row + 1),
            ]
        })
    }

    onmousedown(e) {
        const coords = getCoords(this.refs.body)

        const shiftX = e.pageX - coords.x
        const shiftY = e.pageY - coords.y

        if(
            (shiftX > 30 && shiftX < this.refs.body.offsetWidth - 30) &&
            (shiftY > 30 && shiftY < this.refs.body.offsetHeight - 30)
        ) {
            return;
        }

        this.props.toFront(this.props.id)

        const moveAt = e => {
            this.setState({
                position: {
                    x: e.pageX - shiftX,
                    y: e.pageY - shiftY
                }
            })
        }
        moveAt(e)
        
        document.onmousemove = e => {
            moveAt(e)
        }
        
        this.refs.body.onmouseup = () => {
            document.onmousemove = null
            this.refs.body.onmouseup = null
        }
    
    }

    render() {
        const { rows, position } = this.state
        const style = {}

        style.transform = `translate(${position.x}px, ${position.y}px)`

        return (
            <div
                className="Abacus"
                style={style}
                ref="body"
                onMouseDown={this.onmousedown}
                onClick={() => this.props.toFront(this.props.id)}
            >
                {
                    rows.map((row, i) => (
                        <Row
                            taken={row.taken}
                            count={row.count}
                            mutate={this.mutate}
                            index={i}
                            key={i}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Abacus;
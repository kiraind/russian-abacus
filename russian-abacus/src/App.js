import React, { Component } from 'react';

import Abacus from './components/Abacus/Abacus'
import AddFab from './components/AddFab/AddFab'
import ClearFab from './components/ClearFab/ClearFab'

function generateCode() {
    let code = ''

    for(let i = 0; i < 16; i++)
        code += Math.floor(Math.random() * 36).toString(36)

    return code
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            abacuses: [
                {
                    id: generateCode(),
                    rows: 8,
                    quaters: false
                }
            ]
        }

        this.newAbacus = this.newAbacus.bind(this)
        this.toFront = this.toFront.bind(this)
        this.clearAll = this.clearAll.bind(this)
    }

    newAbacus() {
        this.setState({
            abacuses: [
                ...this.state.abacuses,
                {
                    id: generateCode(),
                    rows: 8,
                    quaters: false
                }
            ]
        })
    }

    toFront(id) {
        const { abacuses } = this.state
        const i = abacuses.findIndex(abc => abc && abc.id === id)

        if(i === abacuses.length - 1) {
            return
        } else if(i === -1) {
            console.error('oh')
            return
        }

        this.setState({
            abacuses: [
                ...abacuses.slice(0, i),
                ...abacuses.slice(i + 1),
                abacuses[i]
            ]
        })
    }

    clearAll() {
        this.setState({
            abacuses: []
        })
    }

    render() {
        return (
            <>
                {
                    this.state.abacuses.map(
                        abacus => abacus && <Abacus
                            id={abacus.id}
                            rows={abacus.rows}
                            quaters={abacus.quaters}
                            key={abacus.id}
                            toFront={this.toFront}
                        />
                    )
                }
                <ClearFab onClick={this.clearAll} />
                <AddFab onClick={this.newAbacus} />
            </>
        );
    }
}

export default App;
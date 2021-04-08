import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Game extends Component {

    constructor(props) {
        super(props)

        this.state = {

            index: 0,
            startOrNext: 'start',
            Computer: '',
            Player: '',
            ComputerPoints: 0,
            PlayerPoints: 0
        }
    }

    next = () => {

        this.setState({ startOrNext: 'next' })

        if (this.state.index < 26) {

            this.setState({ Computer: this.props.ComputerDeck[this.state.index] })
            this.setState({ Player: this.props.Player.playerDeck[this.state.index] })
            this.setState({ index: this.state.index + 1 })

            if (this.props.ComputerDeck[this.state.index] > this.props.Player.playerDeck[this.state.index]) {
                this.setState({ ComputerPoints: this.state.ComputerPoints + 1 })
            }
            else if (this.props.ComputerDeck[this.state.index] < this.props.Player.playerDeck[this.state.index]) {
                this.setState({ PlayerPoints: this.state.PlayerPoints + 1 })
            }
        }
        else {

            if (this.state.ComputerPoints < this.state.PlayerPoints) {
                this.props.addWin()
                this.props.endGame('You won')
            }
            else {
                this.props.addLost()
                this.props.endGame('You lost')
            }
            this.props.history.push('/End')
        }
    }

    render() {
        return (

            <div>
                <h1>lets play</h1>

                <h3>COMPUTER</h3>
                <h4>Computer Points: {this.state.ComputerPoints}</h4>
                <div style={{ width: '100px', height: '100px', border: '1px solid black', display: 'inline-block' }}>
                    {this.state.Computer}
                </div><br />

                <div style={{ width: '100px', height: '100px', border: '1px solid black', display: 'inline-block' }}>
                    {this.state.Player}
                </div>
                <h3>YOU</h3>
                <h4>Player Points: {this.state.PlayerPoints}</h4>
                <button onClick={this.next}>{this.state.startOrNext}</button>
            </div>
        )
    }
}
export default withRouter(Game)
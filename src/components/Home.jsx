import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    startGame = () => {
        if (this.state.name != '') {
            this.props.startGame(this.state.name)
            this.props.history.push('/Game')
        }
    }

    render() {
        return (
            <div>

                <h1>ready for war</h1>

                <input onChange={(e) => { this.setState({ name: e.target.value }) }} placeholder='Enter your name' /><br />

                <button onClick={this.startGame}>start</button>

            </div>
        )
    }
}
export default withRouter(Home)
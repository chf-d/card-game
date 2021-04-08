import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class End extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    anotherGame=()=>{
        this.props.anotherGame()
        this.props.history.push('/Game')
    }

    render() {
        return (
            <div>
                {this.props.endMessage}<br/>
                Total games you've played: {this.props.Player.Games}<br/>
                Total games you've lost: {this.props.Player.Losses}<br/>
                Total games you've won: {this.props.Player.Wins}<br/>

                <button onClick={this.anotherGame}>Again?</button>
            </div>
        )
    }
}
export default withRouter(End)
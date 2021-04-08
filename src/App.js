import React, { Component } from 'react'
import './App.css';
import Home from './components/Home.jsx';
import Game from './components/Game.jsx';
import End from './components/End.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


export default class App extends Component {

  state = {

    Player: '',
    ComputerDeck: '',
    endMessage: ''
  }

  startGame = (name) => {

    let newDeckOfCards = []
    let counter = 1

    for (let i = 2; i <= 14; i++) {

      if (counter <= 4) {

        i--
        counter++

        newDeckOfCards.push(i)
      }
      else {
        counter = 1
      }
    }

    let playerDeck = []

    let randomLimit = 52

    for (let i = 0; i < 26 > 0; i++) {

      let randomNum = Math.floor(Math.random() * (randomLimit - 1)) + 1;

      playerDeck.push(newDeckOfCards[randomNum])

      let filtertDeckOfCards = newDeckOfCards.filter((e, i) => (i != randomNum))
      newDeckOfCards = filtertDeckOfCards

      randomLimit--
    }

    this.setState({ Player: { name: name, Wins: 0, Losses: 0, Games: 0, playerDeck: playerDeck } })
    this.setState({ ComputerDeck: newDeckOfCards })
  }

  anotherGame = () => {

    let newDeckOfCards = []
    let counter = 1

    for (let i = 2; i <= 14; i++) {

      if (counter <= 4) {

        i--
        counter++

        newDeckOfCards.push(i)
      }
      else {
        counter = 1
      }
    }

    let playerDeck = []

    let randomLimit = 52

    for (let i = 0; i < 26 > 0; i++) {

      let randomNum = Math.floor(Math.random() * (randomLimit - 1)) + 1;

      playerDeck.push(newDeckOfCards[randomNum])

      let filtertDeckOfCards = newDeckOfCards.filter((e, i) => (i != randomNum))
      newDeckOfCards = filtertDeckOfCards

      randomLimit--
    }

    let Player = this.state.Player
    Player.playerDeck = playerDeck
    this.setState({ Player: Player, ComputerDeck: newDeckOfCards })
  }

  addWin = () => {

    let Player = this.state.Player
    Player.Wins += 1
    Player.Games += 1
    this.setState({ Player: Player })
  }

  addLost = () => {

    let Player = this.state.Player
    Player.Losses += 1
    Player.Games += 1
    this.setState({ Player: Player })
  }

  endGame = (Message) => {

    this.setState({ endMessage: Message })
  }

  render() {
    return (

      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={() => { return <Home startGame={this.startGame} /> }} />
            <Route exact path='/Game' component={() => {
              return <Game
                Player={this.state.Player}
                ComputerDeck={this.state.ComputerDeck}
                addWin={this.addWin}
                addLost={this.addLost}
                endGame={this.endGame}
              />
            }} />
            <Route exact path='/End' component={() => {
              return <End
                Player={this.state.Player}
                endMessage={this.state.endMessage}
                anotherGame={this.anotherGame}
              />
            }} />
          </Switch>
        </Router>
      </div>
    )
  }
}

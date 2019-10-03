import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Wrapper from "./components/Wrapper/Wrapper"
import Header from "./components/Header/Header"
import StickyHeader from "./components/StickyHeader/StickyHeader"
const cards = require("./cards.json")

class App extends Component {

  state = {
    cards,
    score: 0,
    highScore: 0,
    clicked: [],
    gameOver: false
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  clickCard = (id) => {
    if (!this.state.clicked.includes(id)) {
      // let clickedArray = this.state.clicked.push(id)
      let clickedArray = [...this.state.clicked, id]
      this.incrementScore();
      this.setState({
        clicked: clickedArray
      })
      this.shuffleArray(this.state.cards)
    } else this.resetGame()

  }

  incrementScore = () => {
    let newScore = this.state.score + 1
    this.setState({
      score: newScore
    })
    if (newScore > this.state.highScore) {
      this.setState({
        highScore: newScore
      })
    }
    if (newScore === 12) {
      this.setState({
        gameOver: true
      })
      this.resetGame()
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      clicked: [],
      gameOver: false
    })
    this.shuffleArray(this.state.cards)
  }

  render() {
    return (
      <Wrapper>
        <StickyHeader score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <div className="container">
          <div className="img-container">
            {this.state.cards.map(friend => (
              <Card
                id={friend.id}
                key={friend.id}
                image={friend.image}
                clickCard={this.clickCard}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    )

  }
}

export default App;

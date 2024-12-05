/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {isActive: true, clickedEmoji: [], topScore: 0}

  onClickEmoji = id => {
    const {clickedEmoji} = this.state
    if (clickedEmoji.includes(id)) {
      this.setState({
        isActive: false,
      })
    } else {
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
        topScore:
          prevState.clickedEmoji.length + 1 > prevState.topScore
            ? prevState.clickedEmoji.length + 1
            : prevState.topScore,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({isActive: true, clickedEmoji: []})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isActive, topScore, clickedEmoji} = this.state
    const score = clickedEmoji.length
    const emojisList = this.shuffledEmojisList()

    const game = (
      <ul className="list">
        {emojisList.map(each => (
          <EmojiCard
            onClickEmoji={this.onClickEmoji}
            key={each.id}
            details={each}
          />
        ))}
      </ul>
    )
    return (
      <div className="total-bg">
        <NavBar score={score} topScore={topScore} isActive={isActive} />
        {isActive && score < 12 ? (
          game
        ) : (
          <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
        )}
      </div>
    )
  }
}

export default EmojiGame

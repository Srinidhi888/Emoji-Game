// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  let a
  const {score, onPlayAgain} = props
  const onPlay = () => {
    onPlayAgain()
  }
  if (score === 12) {
    a = (
      <div className="inner-bg">
        <div className="card">
          <h1 className="head">You Won</h1>
          <p className="para">Best Score</p>
          <p className="score-para">12/12</p>
          <button type="button" className="play-btn" onClick={onPlay}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  } else {
    a = (
      <div className="inner-bg">
        <div className="card">
          <h1 className="head">You Lose</h1>
          <p className="para">Score</p>
          <p className="score-para">{score}/12</p>
          <button type="button" className="play-btn" onClick={onPlay}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }
  return <div className="wincard">{a}</div>
}

export default WinOrLoseCard

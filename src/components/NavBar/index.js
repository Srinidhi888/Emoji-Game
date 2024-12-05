// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isActive} = props
  const a = (
    <div className="card-1">
      <p className="space"> Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )
  return (
    <div className="card-0">
      <div className="card-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isActive && score < 12 ? a : ''}
    </div>
  )
}

export default NavBar

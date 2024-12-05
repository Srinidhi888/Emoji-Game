// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = details
  const onEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji">
      <button type="button" className="emoji-btn" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

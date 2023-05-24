// Write your React code here
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackQuestion: false}

  emojiClicked = () => this.setState({isFeedbackQuestion: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emoji} = resources
    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis">
          {emoji.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                onClick={this.emojiClicked}
                className="emoji-btn"
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-img"
                />
                <h1 className="emoji-name">{eachEmoji.name}</h1>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="love-emoji" />
        <h1 className="thanks-heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackQuestion} = this.state
    return (
      <div className="bg-container">
        <div className="emoji-box-container">
          {isFeedbackQuestion
            ? this.renderFeedbackQuestion()
            : this.renderThankYou()}
        </div>
      </div>
    )
  }
}
export default Feedback

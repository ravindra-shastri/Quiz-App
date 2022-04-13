import React from 'react';
import { Link } from 'react-router-dom';

export default class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let level = this.props.level;
    return (
      <>

        <div className="level-container">
          <h2 className="level-title">
            Select Level
          </h2>
          <div>
            <button
              className={level === "easy" ? "easy" : "active"}
              onClick={(event) => { this.props.handleLevel(event, "easy") }}>
              Easy
            </button>
            <button
              className={level === "medium" ? "medium" : "active"}
              onClick={(event) => { this.props.handleLevel(event, "medium") }}>
              Medium
            </button>
            <button
              className={level === "hard" ? "hard" : "active"}
              onClick={(event) => { this.props.handleLevel(event, "hard") }}>
              Hard
            </button>
          </div>
          {this.props.category && this.props.level ? (
            <div>
              <Link to={`/quiz/${this.props.category.id}/${this.props.level}`}>
                <button
                  className="start-quiz-btn">
                  Start Quiz
                </button>
              </Link>
            </div>
          ) : ("")
          }
        </div>
      </>
    )
  }
}
import React from 'react';
import ResultCard from './ResultCard';
export default class QuizPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answers: [],
      submitted: false,
      correctAnswer: null,
      selectedAnswer: [],
    }
  }
  componentDidMount() {
    let incorrectans =
      [...this.props.questions[this.state.currentQuestion].incorrect_answers];

    let correctans =
      [this.props.questions[this.state.currentQuestion].correct_answer];

    let AllAns =
      [...incorrectans, ...correctans];

    this.setState({
      answers: AllAns,
      correctAnswer: correctans,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestion !== this.state.currentQuestion) {

      let incorrectans =
        [...this.props.questions[this.state.currentQuestion].incorrect_answers];

      let correctans =
        this.props.questions[this.state.currentQuestion].correct_answer;

      let AllAns =
        [...incorrectans, correctans];
      this.setState({
        answers: AllAns,
        correctAnswer: correctans,
      });
    }
  }

  handleSubmit = (answers) => {
    this.setState({ submitted: true });
  }

  selectAnswer(answer) {
    const ans = this.state.selectedAnswer;
    const currentIndex = this.state.currentQuestion;
    if (ans[currentIndex] === answer) {
      ans[currentIndex] = null;
      return this.setState({
        selectedAnswer: ans
      })
    }
    ans[currentIndex] = answer;
    return this.setState({
      selectedAnswer: ans
    })
  }

  next() {
    return this.setState((prevState) => {
      return {
        currentQuestion: prevState.currentQuestion + 1
      };
    });
  };

  activeAns(answer) {
    return this.state.selectedAnswer[this.state.currentQuestion] === answer;
  };

  render() {
    let displayQuestion = this.props.questions[this.state.currentQuestion];
    // console.log(this.props)
    return (
      <>
        <div className="question-container">
          <div className="question-num">
            <h2 className="num-level">
              Question - <span> {this.state.currentQuestion + 1}/10 </span>
            </h2>
            <h2 className="num-level">
              <span> Level : {displayQuestion.difficulty} </span>
            </h2>
          </div>

          <h3>
            <span className="question"> {displayQuestion.question} </span>
          </h3>
          {this.state.answers ? (
            <>
              <ul className="answer-container">
                {this.state.answers.map((answer, i) => {
                  return (
                    <li
                      className={this.activeAns(answer) ?
                        'active-answer answer-opt' : 'answer-opt'}
                      onClick={(event) => { this.selectAnswer(answer) }}
                    >
                      <span key={i} className=
                        {this.state.answers[this.state.currentQuestion] ===
                          answer ? answer : ""}>
                        {i + 1} .  {"     " + answer}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            ""
          )}

          {this.state.currentQuestion > 8 ? (
            <div className="submit-btn-container">
              <button
                className="submit-btn"
                onClick={() => {
                  this.handleSubmit(this.state.answers);
                }}>
                Submit
              </button>
            </div>
          ) : (
            <div className="next-btn-container">
              <button
                className="next-btn"
                onClick={(event) => { this.next() }}>
                Next
              </button>
            </div>
          )}

          {this.state.submitted ? (
            <ResultCard
              questions={this.props.questions}
              answers={this.state.selectedAnswer}
            />) : (
            ""
          )
          }
        </div>
      </>
    )
  }
}
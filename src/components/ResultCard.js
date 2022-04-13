import React from 'react';
import { NavLink } from 'react-router-dom';


export default class ResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isResult: null,
      isScore: null,
    }
  }

  componentDidMount() {
    let questions = this.props.questions;
    let answers = this.props.answers;
    let score = 0;

    let result = questions.map((question, index) => {
      if (question.correct_answer === answers[index]) {
        score = score + 1;
      }
      let obj = {
        question: question.question,
        correct_answer: question.correct_answer,
        userAnswer: answers[index],
      };
      console.log(obj);
      return obj;
    });

    // console.log(result, this.props.answers)
    this.setState({
      isResult: result,
      isScore: score,
    });
  }

  render() {
    return (
      <>
        <div className="result-content-container">
          <div>
            <h2 className="score">
              Your Score : <span className="score-font">{this.state.isScore}</span>
            </h2>

          </div>
          <div className="result-container">
            {this.state.isResult ? (
              <table>
                <thead>
                  <tr className="result-header-container">
                    <th className="result-header">No.</th>
                    <th className="result-header">Question</th>
                    <th className="result-header">correct Answer</th>
                    <th className="result-header"> Your Answer </th>
                    <th className="result-header"> Right/Wrong</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.isResult.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="result-content"> {i + 1} </td>
                        <td className="result-content"> {e.question} </td>
                        <td className="result-content">{e.correct_answer}</td>
                        <td className="result-content">{e.userAnswer}</td>
                        <td className="result-content">
                          {e.correct_answer === e.userAnswer ? (
                            <i className="fa-solid fa-circle-check right-icon"></i>
                          ) : (
                            <i className="fa-solid fa-circle-xmark wrong-icon"></i>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
          <div className="back-btn-content">
            <NavLink to="/">
              <button className="back-btn">
                Back to Home
              </button>
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}
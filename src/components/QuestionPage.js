import React from 'react';
import QuizPage from './QuizPage';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    }
  }
  componentDidMount() {
    const { match: { params: { category, level } = {} } = {} } = this.props || {};
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`)
      .then((res) => res.json())
      .then((question) => {
        // console.log(question)
        this.setState({ questions: question.results })
      })
  }

  render() {
    return (
      <>
        <div>
          {this.state.questions ? (
            <QuizPage
              questions={this.state.questions}
            />
          ) : (
            ""
          )
          }
        </div>
      </>
    )
  }
}




























































































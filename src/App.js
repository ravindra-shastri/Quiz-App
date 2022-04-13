import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from "./components/Header";
import Catogaries from './components/Catogaries';
import Level from './components/Level';
import QuestionPage from './components/QuestionPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      level: null,
    }
  }

  addCategory = (event, category) => {
    this.setState({ category: category })
  }
  handleLevel = (event, level) => {
    this.setState({ level: level })
  }

  render() {
    return (
      <>
        <div>
          <Header />
          <BrowserRouter>
            <Level
              level={this.state.level}
              category={this.state.category}
              handleLevel={this.handleLevel} />
            <Route
              path="/" exact
              render={(props) =>
                <Catogaries
                  category={this.state.category}
                  addCategory={this.addCategory}
                />}
            >
            </Route>
            <Route
              path="/quiz/:category/:level"
              render={(props) =>
                <QuestionPage
                  category={this.state.category}
                  level={this.state.level}
                  {...props}
                />}
            >
            </Route>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

import React from 'react';

export default class Catogaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null
    }
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((categories) => {
        // console.log(categories.trivia_categories);
        this.setState({ categories: categories.trivia_categories });
      })
  }

  render() {
    return (
      <>
        {
          this.state.categories ? (
            <div>
              <h2 className="category-title">
                Select Category
              </h2>
              <div className="category-container">
                <div className="category">
                  {this.state.categories.map((category) => {
                    return (
                      <button
                        className="category-btn"
                        onClick={(event) => { this.props.addCategory(event, category) }} key={category.id}>
                        {category.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>) :
            ("")
        }
      </>
    )
  }
}
import React from 'react';

class ImageFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    this.setState({ options: this.props.options });
  }

  render() {
    return (
      <div className="container">
        {this.state.options.map((option, i) =>
          <button key={i} value={option}>{option}</button>
        )}
      </div>
    )
  }
}

export default ImageFetcher;
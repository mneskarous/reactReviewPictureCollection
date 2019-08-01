import React from 'react';

import Collection from './Collection.js';
import ImageDisplay from './ImageDisplay.js';
import ImageFetcher from './ImageFetcher.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      currentImage: null
    }
  }

  componentDidMount() {
    let { collection } = this.props;
    this.setState({ collection, currentImage: collection[0] });
  }

  render() {
    let { collection, currentImage } = this.state;

    return (
      <div id="mainApp">
        <ImageFetcher options={this.props.options} />
        <div className="collectionRow">
          {currentImage && <ImageDisplay image={currentImage} />}
          <Collection collection={collection} />
        </div>
      </div>
    )
  }
}

export default App;
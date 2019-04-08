import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ''
    };
  }

  search = (query) => {
    // TODO: API call
    giphy('UCDFX1QpKvsso09S64Y3bRTRkPHzxzZc').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data,
      });
    });
  }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs = [
      { id: "wc35PjXwGHtgA"},
      { id: "vsh3k3WCKX6ne"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateGif={this.updateGif} />

        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { fetchImg } from 'services/api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      const images = await fetchImg('dog');
      console.log(images);
      this.setState({
        images,
      });
    } catch (error) {
    } finally {
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.images.length > 0 &&
            this.state.images.map(image => {
              return (
                <li key={image.id}>
                  <img src={image.webformatURL}  alt={image.tag}/>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default App;

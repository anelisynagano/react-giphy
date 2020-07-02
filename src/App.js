import React, { Component } from 'react';
import './App.css';
import GifList from './components/GifList';
import SelectedGif from './components/SelectedGif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      selectedGif: "https://media1.giphy.com/media/rwNpHtaMGnStW/giphy.gif"
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  handleSelectGif = (clickedGif) => {
    this.setState({ selectedGif: clickedGif })
  }

  fetchData = () => {
    fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=LI4QeV4xLGKRQ6n79ZN29o0MWcAPoFhn&limit=5')
      .then(res => res.json())
      .then(data => this.setState({ dataArray: data.data }))
  }

  render() {
    const { selectedGif, dataArray } = this.state;
    return (
     <div className='container'>
       <SelectedGif selectedGif={selectedGif} />
       <GifList gifs={dataArray} handleSelectGif={this.handleSelectGif} />
     </div>
    );
  }
}

export default App;

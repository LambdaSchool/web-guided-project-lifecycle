import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    console.log('App: Component Did Mount');
    setTimeout(() => {
      console.log('App: get data');
      this.setState({
        pokemon: data
      })
    }, 2000) 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App: Component Did Update');
    console.log('old props', prevProps);
    console.log('new props', this.props);

    console.log('old state', prevState);
    console.log('new state', this.state);

    if(prevState.pokemon.length !== this.state.pokemon.length) {
      console.log('pokemon changed');
      if (this.state.pokemon[1].name === 'Bulbasaur') {
        console.log('Fire off something cool');
      }
    }

  }

  render() {
    console.log('App: Render Component');
    return (
      <div className="App">
       { this.state.pokemon.length === 0 ? <h3>Loading...</h3> : <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;

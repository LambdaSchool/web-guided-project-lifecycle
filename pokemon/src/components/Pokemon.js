import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  componentDidMount() {
    console.log('Pokemon: Component Did Mount');
  }

  componentDidUpdate() {
    console.log('Pokemon: Component Did Update');
  }
  render() {
    console.log('Pokemon: Render Component');
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon}/>
        ))}
      </>
    );
  }
}

export default Pokemon;

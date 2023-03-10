import React, { Component } from 'react';
import PropTypes from 'prop-types';
import planets from 'planets';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <figure>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
          <figcaption> Imagens dos Planetas da Via Láctea </figcaption>
        </figure>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

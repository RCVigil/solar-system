import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <li>
          <PlanetCard>
            {/* {console.log(planetName[0])} */}
            planetImage[0]
          </PlanetCard>
        </li>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SolarSystem;

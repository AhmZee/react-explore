import React, { useState } from 'react';
import '../src/styles/Destination.css';
import moonImage from '../src/images/destination/image-moon.png';
import marsImage from '../src/images/destination/image-mars.png';
import europaImage from '../src/images/destination/image-europa.png';
import titanImage from '../src/images/destination/image-titan.png';

const Destination = () => {
  const destinations = [
    {
      id: 1,
      destn: 'MOON',
      imageSrc: moonImage,
      information: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      avgDistance: '384,400 KM',
      estTravelTime: '3 DAYS'
    },
    {
      id: 2,
      destn: 'MARS',
      imageSrc: marsImage,
      information: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      avgDistance: '225 MIL. KM',
      estTravelTime: '9 MONTHS'
    },
    {
      id: 3,
      destn: 'EUROPA',
      imageSrc: europaImage,
      information: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      avgDistance: '628 MIL. KM',
      estTravelTime: '3 YEARS'
    },
    {
      id: 4,
      destn: 'TITAN',
      imageSrc: titanImage,
      information: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      avgDistance: '1.6 BIL. KM',
      estTravelTime: '7 YEARS'
    }
  ];

  const [selectedDest, setSelectedDest] = useState(destinations[0]);

  const handleDestinationClick = (destination) => {
    setSelectedDest(destination);
  };

  return (
    <div className="Destination">
      <div className='left-content'>
        <h3 className='pick-destn'><span>01</span>PICK YOUR DESTINATION</h3>

        <img src={selectedDest.imageSrc} className="destn-pic" alt={selectedDest.destn} />
      </div>
      <div className='right-content'>
        <ul className="destination-links">
          {destinations.map((destination) => (
            <li
              key={destination.id}
              onClick={() => handleDestinationClick(destination)}
              className={selectedDest.id === destination.id ? 'selected-destn' : ''}
            >
              {destination.destn}
            </li>
          ))}
        </ul>

        <h1>{selectedDest.destn}</h1>
        <p>{selectedDest.information}</p>

        <div className="distance-time">
          <div>
            <h3 className="avg-distance">AVG. DISTANCE</h3>
            <h2>{selectedDest.avgDistance}</h2>
          </div>
          <div>
            <h3 className="avg-distance">EST. TRAVEL TIME</h3>
            <h2>{selectedDest.estTravelTime}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

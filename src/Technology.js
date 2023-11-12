import React, { useState, useEffect, useMemo } from 'react';
import '../src/styles/Technology.css';
import launchImage from '../src/images/technology/image-launch-vehicle-landscape.jpg';
import spacePortImage from '../src/images/technology/image-spaceport-landscape.jpg';
import spaceCapsuleImage from '../src/images/technology/image-space-capsule-landscape.jpg';
import launchImage2 from '../src/images/technology/image-launch-vehicle-portrait.jpg';
import spacePortImage2 from '../src/images/technology/image-spaceport-portrait.jpg';
import spaceCapsuleImage2 from '../src/images/technology/image-space-capsule-portrait.jpg';

const Technology = () => {
  const technologies = useMemo(() => [
    {
      id: 1,
      techType: 'LAUNCH VEHICLE',
      imageSrc: launchImage,
      imageSrc2: launchImage2,
      information: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      id: 2,
      techType: 'SPACEPORT',
      imageSrc: spacePortImage,
      imageSrc2: spacePortImage2,
      information: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    },
    {
      id: 3,
      techType: 'SPACE CAPSULE',
      imageSrc: spaceCapsuleImage,
      imageSrc2: spaceCapsuleImage2,
      information: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ],[]);

  // Load data from local storage if available
  const storedTechnologies = JSON.parse(localStorage.getItem('technologies')) || technologies;
  const [selectedTech, setSelectedTech] = useState(storedTechnologies[0]);

  const handleTechClick = (technology) => {
    setSelectedTech(technology);
  };

  // Save data to local storage when component unmounts
  useEffect(() => {
    localStorage.setItem('technologies', JSON.stringify(technologies));
  }, [technologies]);

  return (
    <div className="Technology">

      <h3 className='pick-techType'><span>03</span>SPACE LAUNCH 101</h3>

      <div className='main-content'>

        <div className='right-content'>
          <img src={selectedTech.imageSrc} className="techType-pic" alt={selectedTech.techType} />
          <img src={selectedTech.imageSrc2} className="techType-pic2" alt={selectedTech.techType} />
        </div>

        <div className='left-content'>
          <ul className="technology-links">
            {technologies.map((technology) => (
              <li
                key={technology.id}
                onClick={() => handleTechClick(technology)}
                className={selectedTech.id === technology.id ? 'selected-techType' : ''}
              >
                {technology.id}
              </li>
            ))}
          </ul>

          <h3 className='terminology'>THE TERMINOLOGY…</h3>
          <h1>{selectedTech.techType}</h1>
          <p>{selectedTech.information}</p>

        </div>
      </div>
    </div>
  );
};

export default Technology;

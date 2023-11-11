import React, { useState, useEffect, useMemo } from 'react';
import '../src/styles/Crew.css';
import memberImage1 from '../src/images/crew/image-douglas-hurley.png';
import memberImage2 from '../src/images/crew/image-mark-shuttleworth.png';
import memberImage3 from '../src/images/crew/image-victor-glover.png';
import memberImage4 from '../src/images/crew/image-anousheh-ansari.png';

const Crew = () => {
  const members = useMemo(() =>[
    {
      id: 1,
      position: 'COMMANDER',
      imageSrc: memberImage1,
      information: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      name: 'DOUGLAS HURLEY'
    },
    {
      id: 2,
      position: 'MISSION SPECIALIST',
      imageSrc: memberImage2,
      information: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      name: 'MARK SHUTTLEWORTH'
    },
    {
      id: 3,
      position: 'PILOT',
      imageSrc: memberImage3,
      information: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      name: 'VICTOR GLOVER'
    },
    {
      id: 4,
      position: 'FLIGHT ENGINEER',
      imageSrc: memberImage4,
      information: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      name: 'ANOUSHEH ANSARI'
    }
  ],[]);

  const [selectMember, setSelectMember] = useState(members[0]);

  const handleMemberClick = (member) => {
    setSelectMember(member);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Find the next member in the list
      const currentIndex = members.findIndex((member) => member.id === selectMember.id);
      const nextIndex = (currentIndex + 1) % members.length;
      setSelectMember(members[nextIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [selectMember, members]);

  return (
    <div className="Crew">
      <h3 className='meet-crew'><span>02</span>MEET YOUR CREW</h3>
      <div className="main-con">
        <div className='right-con'>
          <img src={selectMember.imageSrc} className="member-pic" alt={selectMember.tracker} />
          <div className='hr-line'></div>
        </div>
        <div className='left-con'>
          <ul className="member-links">
            {members.map((member) => (
              <li
                key={member.id}
                onClick={() => handleMemberClick(member)}
                className={selectMember.id === member.id ? 'selected-tracker' : ''}
              >

              </li>
            ))}
          </ul>
          <h3 className='position'>{selectMember.position}</h3>
          <h2 className='name'>{selectMember.name}</h2>
          <p className='information'>{selectMember.information}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;

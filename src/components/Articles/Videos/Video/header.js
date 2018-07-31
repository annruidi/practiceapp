import React from 'react';
import TeamInfo from '../../Elems/teaminfo';

const Header = (props) => {
  const teamNfo = (team) => {

    return team ?
      (<TeamInfo team={team}/>)
     :null;

  }
  return (
    <div>
      {teamNfo(props.teamData)}
    </div>
  );
};

export default Header;
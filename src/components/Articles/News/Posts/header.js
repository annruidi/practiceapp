import React from 'react';
import TeamInfo from '../../Elems/teaminfo';
import PostData from '../../Elems/postdata';

const Header = (props) => {

  const teamNfo = (team) => {

    return team ?
      (<TeamInfo team={team}/>)
     :null;

  }

  const postData = (date, author) => {
    return <PostData data ={{date, author}} />
  }
  return (
    <div>
       {teamNfo(props.teamData)}
       {postData(props.date, props.author)}
    </div>
  );
};

export default Header;
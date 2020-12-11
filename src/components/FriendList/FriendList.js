import React from 'react';
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem"



const FriendList = ({friends}) =>{
  return(<>
  <ul>
  {friends.map((elem)=>{
return(<FriendListItem key={elem.id}avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline} />)
  })}
  </ul>
</>)
}
FriendListItem.propTypes ={
  friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendList;
import React from 'react';
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css"
import FriendList from '../FriendList/FriendList';

const FriendListItem = ({avatar, name, isOnline}) =>{
  let bool;
  if(isOnline == true){
  bool = "green_span"
  }
  else{
  bool = "red_span"
  }
  console.log(bool)
  return(<>
  <li className={styles.item}>
  <span className={styles[bool]}></span>
  <img className={styles.avatar} src={avatar} alt={name} />
  <p className={styles.name}>{name}</p>
</li>
  </>)
}
FriendListItem.propTypes ={
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}
FriendListItem.defaultProps = {
  avatar: "https://aikidojo.lv/wp-content/uploads/2019/08/nophoto.jpg",
  name: "please check",
  isOnline: false
}


export default FriendListItem;
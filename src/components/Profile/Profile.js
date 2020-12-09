import React from 'react';
import PropTypes from "prop-types";
import styles from "./Profile.module.css";


const Profile = ({name, tag, location, avatar, stats}) =>{
  return(
    <>
    <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="user avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
  <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}> {stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
  <span className={styles.quantity}> {stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}> {stats.likes}</span>
    </li>
  </ul>
</div>
</>
  )
}
Profile.propTypes ={
  name:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.objectOf(PropTypes.number)
}
Profile.defaultProps = {
  name:"username",
  tag:"username",
  location:"Canada",
  avatar: "https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg",
  stats:{"followers": 0,
  "views": 0,
  "likes": 0}
}

export default Profile;
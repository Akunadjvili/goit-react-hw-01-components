import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(([item, value]) => {
          return (
            <li className={ styles.item} key={item}>
              <span className={styles.label}>{item}</span>
              <span className={styles.quantity}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Profile.defaultProps = {
  avatar: 'https://svgsilh.com/svg/159236-9e9e9e.svg',
  tag:'(empty)',
  location:'(empty)',
  stats:{
    followers: 0,
    views: 0,
    likes: 0,
  }
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;

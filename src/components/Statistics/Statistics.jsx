import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colorGenerator = () => {
  const [red, green, blue] = [0, 1, 2].map(() => {
    return Math.floor(Math.random() * 256);
  });
  return `rgb(${red},${green},${blue})`;
};

const Statistics = ({ title, stats }) => {

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => {

          return (
            <li style={{backgroundColor: colorGenerator()}} className={ styles.item} key={id}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  stats:[]
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

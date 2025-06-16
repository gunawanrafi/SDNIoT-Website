import React from 'react';
import styles from '../styles/Dashboard.module.css';

const SummaryCard = ({ title, value, icon }) => {
  return (
    <div className={styles.summaryCard}>
      <span className={styles.summaryIcon}>{icon}</span>
      <div>
        <h3 className={styles.summaryTitle}>{title}</h3>
        <p className={styles.summaryValue}>{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
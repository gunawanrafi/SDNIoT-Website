import React from 'react';
import styles from '../styles/SensorCard.module.css';

const SensorCard = ({ sensor }) => {
  const { name, status, details } = sensor;

  return (
    <div className={styles.sensorCard}>
      <h3 className={styles.sensorName}>{name}</h3>
      <p className={styles.sensorStatus}>
        Status: <span className={status === 'Online' ? styles.online : styles.offline}>{status}</span>
      </p>
      <div className={styles.sensorDetails}>
        <p>IP: {details.ip}</p>
        <p>Uptime: {details.uptime}</p>
        <p>Data: {details.data}</p>
      </div>
    </div>
  );
};

export default SensorCard;
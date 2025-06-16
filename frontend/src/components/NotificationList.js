import React from 'react';
import styles from '../styles/Dashboard.module.css';

const NotificationList = ({ notifications }) => {
  return (
    <div className={styles.notificationList}>
      <h2>Alerts</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index} className={styles.notificationItem}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
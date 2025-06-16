import React from 'react';
import styles from '../styles/Dashboard.module.css';

const GrafanaEmbed = ({ url }) => {
  return (
    <iframe
      src={url}
      className={styles.grafanaEmbed}
      frameBorder="0"
      title="Grafana Dashboard"
    ></iframe>
  );
};

export default GrafanaEmbed;
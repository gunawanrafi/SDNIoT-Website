import React, { useState } from 'react';
import SummaryCard from '../components/SummaryCard';
import SensorCard from '../components/SensorCard';
import NotificationList from '../components/NotificationList';
import GrafanaEmbed from '../components/GrafanaEmbed';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // Dummy data
  const summaryData = [
    { title: 'Active Devices', value: 12, icon: '🟢' },
    { title: 'Network Status', value: 'Online', icon: '🌐' },
    { title: 'Alerts', value: 3, icon: '⚠️' },
    { title: 'Performance', value: 'Good', icon: '📊' },
  ];

  const sensorData = [
    {
      name: 'DHT11 Sensor',
      status: 'Online',
      details: { ip: '192.168.1.10', uptime: '12h 30m', data: 'Temp: 25°C, Humidity: 60%' },
    },
    {
      name: 'Camera Sensor',
      status: 'Offline',
      details: { ip: '192.168.1.11', uptime: 'N/A', data: 'No data available' },
    },
    {
      name: 'Heart Rate Sensor',
      status: 'Online',
      details: { ip: '192.168.1.12', uptime: '8h 15m', data: '75 bpm' },
    },
  ];

  const notifications = [
    'DHT11 Sensor: Temperature exceeded threshold!',
    'Camera Sensor: Connection lost.',
    'Heart Rate Sensor: Stable at 75 bpm.',
  ];

  // URLs for Grafana charts
  const grafanaCharts = [
    { title: 'DHT11 Sensor Chart', url: 'https://grafana.example.com/d/dht11' },
    { title: 'Camera Sensor Chart', url: 'https://grafana.example.com/d/camera' },
    { title: 'Heart Rate Sensor Chart', url: 'https://grafana.example.com/d/heartrate' },
  ];

  return (
    <div className={styles.dashboardPage}>
      <header>
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <h1 className={styles.dashboardTitle}>IoT Dashboard</h1>

      {/* Summary Section */}
      <div className={styles.summarySection}>
        {summaryData.map((item, index) => (
          <SummaryCard key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>

      {/* Sensor Section */}
      <div className={styles.sensorSection}>
        {sensorData.map((sensor, index) => (
          <SensorCard key={index} sensor={sensor} />
        ))}
      </div>

      {/* Notifications Section */}
      <NotificationList notifications={notifications} />

      {/* Grafana Charts */}
      <div className={styles.grafanaSection}>
        <h2>Performance Charts</h2>
        <div className={styles.grafanaGrid}>
          {grafanaCharts.map((chart, index) => (
            <div key={index} className={styles.grafanaBox}>
              <h3>{chart.title}</h3>
              <GrafanaEmbed url={chart.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
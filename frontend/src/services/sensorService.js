import axios from 'axios';

export const fetchSensorData = async () => {
  const response = await axios.get('http://localhost:5000/api/sensor');
  return response.data;
};

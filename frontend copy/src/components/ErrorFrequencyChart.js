import React from 'react';
import { Bar } from 'react-chartjs-2';

const ErrorFrequencyChart = ({ errorFrequency }) => {
  const labels = Object.keys(errorFrequency);
  const dataValues = Object.values(errorFrequency);

  const data = {
    labels,
    datasets: [
      {
        label: 'Error Frequency',
        data: dataValues,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h3>Error Frequency Analysis</h3>
      <Bar data={data} />
    </div>
  );
};

export default ErrorFrequencyChart;

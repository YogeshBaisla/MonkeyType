import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorFrequencyChart from './ErrorFrequencyChart';

const AnalysisPage = ({ sessionId }) => {
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await axios.get(`https://monkeytype-9mp4.onrender.com/api/sessions/analysis/${sessionId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setAnalysis(res.data.analysis);
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching analysis');
      }
    };

    fetchAnalysis();
  }, [sessionId]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!analysis) return <p>Loading analysis...</p>;

  return (
    <div>
      <h2>Session Analysis</h2>
      <p>Impulsivity Score: {analysis.impulsivityScore.toFixed(2)}</p>
      <p>Average Pause Duration: {analysis.averagePauseDuration.toFixed(2)}ms</p>
      <p>Number of Pauses: {analysis.numberOfPauses}</p>
      <ErrorFrequencyChart errorFrequency={analysis.errorFrequency} />
      {/* You can add more charts and data visualizations for additional insights */}
    </div>
  );
};

export default AnalysisPage;

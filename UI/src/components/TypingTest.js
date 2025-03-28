import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const paragraph = "This is a sample paragraph to test your typing skills. Type accurately and fast to get a good score!";

const TypingTest = () => {
  const [timeLeft, setTimeLeft] = useState(15); // or 30 seconds based on user selection
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const timerRef = useRef(null);

  useEffect(() => {
    if (started && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      // calculate results and post session data
      calculateResults();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, started]);

  const startTest = () => {
    setStarted(true);
    setTimeLeft(15); // or 30
  };

  const calculateResults = () => {
    const wordsTyped = input.trim().split(/\s+/).length;
    const minutes = (15 - timeLeft) / 60;
    const calculatedWPM = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
    setWpm(calculatedWPM);

    // Simple accuracy calculation (you can refine this logic)
    const correctChars = paragraph.split('').filter((char, index) => input[index] === char).length;
    const calcAccuracy = Math.round((correctChars / paragraph.length) * 100);
    setAccuracy(calcAccuracy);

    // Save session via API call (assumes user is authenticated and token is set)
    axios.post('https://monkeytype-9mp4.onrender.com/api/sessions', {
      wpm: calculatedWPM,
      accuracy: calcAccuracy,
      totalErrors: paragraph.length - correctChars,
      errorWords: [] // Process to extract error words if needed
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Typing Test</h2>
      {!started && <button onClick={startTest}>Start Test</button>}
      {started && (
        <div>
          <p>{paragraph}</p>
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="Start typing..."
            rows={5}
            cols={50}
          />
          <div>Time Left: {timeLeft}s</div>
        </div>
      )}
      {timeLeft === 0 && (
        <div>
          <h3>Results</h3>
          <p>WPM: {wpm}</p>
          <p>Accuracy: {accuracy}%</p>
        </div>
      )}
    </div>
  );
};

export default TypingTest;

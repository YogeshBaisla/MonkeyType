const Session = require('../models/Session');

exports.createSession = async (req, res) => {
  try {
    const sessionData = { ...req.body, userId: req.user.id };
    const session = await Session.create(sessionData);
    res.status(201).json({ message: 'Session saved', session });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.params.userId });
    res.json({ sessions });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.analyzeSession = async (req, res) => {
    try {
      const session = await Session.findById(req.params.sessionId);
      if (!session) return res.status(404).json({ error: 'Session not found' });
      
      // Analyze error frequency from errorWords
      const errorFrequency = {};
      session.errorWords.forEach(word => {
        errorFrequency[word] = (errorFrequency[word] || 0) + 1;
      });
  
      // Analyze typing durations: detect pauses (e.g., any duration that is significantly higher than the average)
      const durations = session.typingDurations;
      const averageDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
      const pauses = durations.filter(duration => duration > averageDuration * 1.5);
  
      // Psychological Insights
      // Impulsivity vs. Deliberation: fast typing with high error rate
      const impulsivityScore = session.wpm / (session.totalErrors + 1);
      // Cognitive Load: slower typing speeds may indicate higher cognitive load on complex words
      const cognitiveLoadIndicator = averageDuration;
      // Resilience: less slowdown after errors (this requires more detailed metric tracking in practice)
      // Anxiety: performance differences can be compared based on session duration (15s vs 30s), but here we assume it's embedded in the data
  
      const insights = {
        errorFrequency,
        averagePauseDuration: averageDuration,
        numberOfPauses: pauses.length,
        impulsivityScore,
        cognitiveLoadIndicator,
        // Add additional insights as needed
      };
  
      res.json({ analysis: insights });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  exports.aggregateUserDurations = async (req, res) => {
    try {
      const results = await Session.aggregate([
        { $match: { userId: req.user.id } },
        { $unwind: "$typingDurations" },
        { $group: {
            _id: null,
            averageDuration: { $avg: "$typingDurations" }
        }}
      ]);
      res.json({ averageDuration: results[0]?.averageDuration || 0 });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  

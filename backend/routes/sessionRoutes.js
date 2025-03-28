const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createSession, getSessions, analyzeSession, aggregateUserDurations } = require('../controllers/sessionController');

router.post('/', authMiddleware, createSession);
router.get('/:userId', authMiddleware, getSessions);
router.get('/analysis/:sessionId', authMiddleware, analyzeSession);
router.get('/aggregate/durations', authMiddleware, aggregateUserDurations);
module.exports = router;

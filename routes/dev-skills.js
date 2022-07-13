const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const devSkillsCtrl = require('../controllers/dev-skills');


// GET /todos
router.get('/', devSkillsCtrl.index);

module.exports = router;

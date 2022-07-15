const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const devSkillsCtrl = require('../controllers/dev-skills');


// GET /skills
router.get('/', devSkillsCtrl.index);
// GET /dev-skills/new (new functionality - show a form)
router.get('/new', devSkillsCtrl.new);
// POST /dev-skills( create functionality)
router.post('/', devSkillsCtrl.create);

module.exports = router;

const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const devSkillsCtrl = require('../controllers/dev-skills');




// GET /skills
router.get('/', devSkillsCtrl.index);
// GET /dev-skills/new (new functionality - show a form)
router.get('/new', devSkillsCtrl.new);
//GET /dev-skils/:id (show functionality)
router.get('/:id', devSkillsCtrl.show);
// POST /dev-skills( create functionality)
router.post('/', devSkillsCtrl.create);
// DELETE /dev-skills/:id (delete functionality)
router.delete('/:id', devSkillsCtrl.delete);

module.exports = router;

const Skill = require('../models/dev-skill');

module.exports = {
  index,
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('dev-skills/index', {skills, title: 'Dev Skills'});
} 
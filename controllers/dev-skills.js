const Skill = require('../models/dev-skill');

module.exports = {
  index,
  new: newSkill,
  create
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('dev-skills', {skills, title: 'Dev Skills'});
} 

function newSkill(req, res) {
    // render the new.ejs that contains a form
    res.render('dev-skills/new');
  }

  function create(req, res) {
    // The model is responsible for CRUD
    console.log('req.body', req.body)
    Skill.create(req.body);
    // If data is updated/added we need to redirect
    // Where we redirect to, is entirely up to you
    // what do want your app to do?
    res.redirect('/dev-skills');
  }
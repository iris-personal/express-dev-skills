const Skill = require('../models/dev-skill');

module.exports = {
  index,
  new: newSkill,
  create,
  show,
  delete: deleteSkill,
  edit, 
  update
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
    Skill.create(req.body);
    res.redirect('/dev-skills');
  }

  function show(req, res) {
    res.render('dev-skills/show', { 
        devSkills: Skill.getOne(req.params.id) });
  }

  function deleteSkill(req, res) {
    Skill.delete(req.params.id);
    res.redirect('/dev-skills');
  }

  function edit(req, res) {
    res.render('dev-skills/edit', { 
       devSkills: Skill.getOne(req.params.id) });
  }

  function update(req, res) {
    req.body.possess = !!req.body.possess;
    Skill.update(req.params.id, req.body);
    res.redirect(`/dev-skills/${req.params.id}`);
  }
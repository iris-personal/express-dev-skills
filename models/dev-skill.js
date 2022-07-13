const devSkills = [
    {id: 11111, skill: 'adaptable', possess: true},
    {id: 22222, skill: 'personable', possess: true},
    {id: 33333, skill: 'express mastery', possess: false},
    {id: 44444, skill: 'break time nap capable', possess: true},
    {id: 55555, skill: 'highly intuitive', possess: true},
    {id: 66666, skill: 'extrovert', possess: false},
    {id: 77777, skill: 'master chef', possess: true},
    {id: 88888, skill: 'slow learner', possess: false},
    {id: 99999, skill: 'ability to code along with Jim and understand fully', possess: false},
]

module.exports = {
    getAll
  };
  
  function getAll() {
    return devSkills;
  }
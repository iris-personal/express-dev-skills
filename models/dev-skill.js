const devSkills = [
    {id: 11111, skill: 'Adaptable', possess: true},
    {id: 22222, skill: 'Personable', possess: true},
    {id: 33333, skill: 'Express Mastery', possess: false},
    {id: 44444, skill: 'Break Time Nap Capable', possess: true},
    {id: 55555, skill: 'Highly Intuitive', possess: true},
    {id: 66666, skill: 'Extrovert', possess: false},
    {id: 77777, skill: 'Master Chef', possess: true},
    {id: 88888, skill: 'Slow Learner', possess: false},
    {id: 99999, skill: 'Ability to Code Along with Jim and Understand Fully', possess: false},
]

module.exports = {
    getAll
  };
  
  function getAll() {
    return devSkills;
  }
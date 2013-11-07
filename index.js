var form = require('cmp-form');

module.exports = function() {
  return form({
    action: '/auth/local',
    inputs: [{type: 'text', name: 'username', placeholder: 'username'},
             {type: 'password', name: 'password', placeholder: 'password'},
             {type: 'submit', name: 'submit', value: 'go'}]
  });
};

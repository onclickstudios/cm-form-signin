var
hoquet = require('hoquet');

/**
 * 
 * @param action String form action
 * @param data Object optional data to prepopulate the form
 */
module.exports = function cmpFormSingin(action, data) {
  
  return hoquet.render(
    ['form',
     {action:action, method:'post'},
     ['input', {type:'text', name:'username', placeholder:'username', value:data && data.username}],
     ['input', {type:'password', name:'password', placeholder:'password', value:data && data.password}],
     ['input', {type:'submit', name:'submit', value:data && data.submit || 'submit'}]]
  );
  
};

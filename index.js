var
hoquet = require('hoquet');

/**
 * 
 * @param options Object form action, method, class
 * @param data Object optional data to prepopulate the form
 */
var exports = module.exports = function cmFormSignin(context) {
  var
  context = context || {},
  data = context.data || {};
  
  return hoquet.render(
    ['form',
     {action:(context.action),
      method:(context.method || 'post'),
      class:'cm cm-form cm-form-signin' + (context && context.class || '')},
     ['input', {type:'text', name:'username', placeholder:'username', value:data.username}],
     ['input', {type:'password', name:'password', placeholder:'password', value:data.password}],
     ['input', {type:'submit', name:'submit', value:data.submit || 'submit'}]]
  );
  
};

exports.behavior = function(context) {
  
};
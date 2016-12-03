var fs = require('fs'); 
var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));

var ds = app.datasources.userlist;

ds.automigrate('InterviewUser', function(err) {
  if (err) throw err;

  var file = 'data.json';
  var dataObj = JSON.parse(fs.readFileSync(path.resolve(__dirname, file), 'utf8'));

  var userList = (typeof dataObj.users !== 'undefined') ? dataObj.users : []; 
  
  var count = userList.length;
  userList.forEach(function(user) {
    app.models.InterviewUser.create(user, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
const inquirer = require('inquirer');
const child_process = require('child_process');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'subject',
      message: 'What subject?',
      choices: ['Sort', 'Tree'],
      filter: function(val) {
        return val.toLowerCase();
      }
    },
    {
      type: 'rawlist',
      name: 'algorithm',
      pageSize: 15,
      message: 'What Algorithm?',
      choices: ['Bubble Sort', 'Insertion Sort'],
      filter: function(val) {
        return val.toLowerCase().split(' ').join('-');
      }
    }
  ])
  .then((answers) => {
    const spawn = child_process.spawn('yarn', ['jest', `${answers.algorithm}`], {stdio: "inherit"});

    spawn.stdout.on('data', function(data){
      child_process.stdout.write(data);
    });
    
    spawn.stderr.on('data', function(data){
      child_process.stderr.write(data);
    });
    
    spawn.on('exit', function(code){
      console.log(code);
    });
    
  });
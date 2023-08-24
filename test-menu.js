const inquirer = require('inquirer');
const child_process = require('child_process');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'algorithm',
      pageSize: 15,
      message: 'What Algorithm?',
      choices: ['Bubble Sort', 'Binary Search', 'Selection Sort'],
      filter: function(val) {
        return val.toLowerCase().split(' ').join('-');
      }
    }
  ])
  .then((answers) => {
    child_process.spawn('yarn', ['jest', `${answers.algorithm}`], {stdio: "inherit"});
  });
const fs= require('fs');
const generatePage = require('./src/pagetemplate.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name1, github] = profileDataArgs;



fs.writeFile('index.html', generatePage(name1, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
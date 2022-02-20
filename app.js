const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);
const fs= require('fs');


//const printProfileData = profileDataArr => {
    //for (let i = 0; i < profileDataArr.length; i += 1) {
     // console.log(profileDataArr[i]);
   // }

    //console.log('================');

    //profileDataArr.forEach(profileItem => console.log(profileItem));
//};
const generatePage = (name1, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${'Ciara Hargis'}</h1>
    <h2><a href="https://github.com/${'NumiBlue'}">Github</a></h2>
  </body>
  </html>
  `;
};

//console.log(generatePage('Ciara Hargis', 'NumiBlue'));
//printProfileData(profileDataArgs);

const [name1, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name1, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
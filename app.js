//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

//const printProfileData = profileDataArr => {
    //for (let i = 0; i < profileDataArr.length; i += 1) {
     // console.log(profileDataArr[i]);
   // }

    //console.log('================');

    //profileDataArr.forEach(profileItem => console.log(profileItem));
//};
const generatePage = (userName, githubName) => {
  return `
    Name: ${'Ciara Hargis'}
    GitHub: ${'NumiBlue'}
  `;
};

console.log(generatePage('Ciara Hargis', 'NumiBlue'));
//printProfileData(profileDataArgs);
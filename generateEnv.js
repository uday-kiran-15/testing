// const fs = require('fs');
// // Configure Angular `environment.ts` file path
// var targetPath;
// // Load node modules
// // const colors = require('colors');
// // require('dotenv').load();
// // `environment.ts` file structure

// // -------------------------------------------------------
// // switch(${process.env.stage}){
// //     case dev:
// //         var targetPath = './src/environments/environment.dev.ts';
// //         break;
// //     case qa:
// //         var targetPath = './src/environments/environment.qa.ts';
// //         break;
// //     case prod:
// //         var targetPath = './src/environments/environment.prod.ts';
// //         break;
// //     default:
// //         var targetPath = './src/environments/environment.ts';
// // }
//     if(`${process.env.stage}` == "dev"){
//         targetPath = './src/environments/environment.dev.ts';
//     }
// const envConfigFile = `export const environment = {
//     production: "${process.env.IS_PRODUCTION || false}",
//     environment: "${process.env.stage || "local"}",
//     userName: "${process.env.USERNAME || "I am from Dynamic Environment :D"}",
//     company: "${process.env.COMPANY || "I am from Dynamic Environment :D"}"
// }`;



// fs.writeFile(targetPath, envConfigFile, function (err) {
//     console.log(targetPath,"targetPath");
//    if (err) {
//        throw console.error(err);
//    } else {
//        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
//    }
// });

function generateEnvironmentContent() {
    return `export const environment = {
    production: ${process.env.IS_PRODUCTION || false},
    environment: "${process.env.ENVIRONMENT || "local"}",
    userName: "${process.env.USERNAME || "I am from Dynamic Environment :D"}",
    company: "${process.env.COMPANY || "I am from Dynamic Environment :D"}"
    };`
    }
    (function generateEnvironment() {
    const fs = require('fs');
    const fileName = 'environment.ts'; // you can this as hard coded name, or you can use your own unique name
    const content = generateEnvironmentContent();
    process.chdir(`src/environments`); // This is the directory where you created the environment file. you can use your own path, but for this I used the Angular default environment directory
    fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
    })();
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

switch (`${process.env.ENVIRONMENT}`) {
    case "dev":
        (function generateEnvironment() {
            const fs = require('fs');
            const fileName = 'environment.dev.ts'; 
            const content = generateEnvironmentContent();
            process.chdir(`src/environments`); 
            fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
            })();
        break;
    case "qa":
        (function generateEnvironment() {
            const fs = require('fs');
            const fileName = 'environment.qa.ts'; 
            const content = generateEnvironmentContent();
            process.chdir(`src/environments`); 
            fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
            })();
        break;
        
    case "prod":
        (function generateEnvironment() {
            const fs = require('fs');
            const fileName = 'environment.prod.ts'; 
            const content = generateEnvironmentContent();
            process.chdir(`src/environments`); 
            fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
            })();
        break;
    default:
        (function generateEnvironment() {
            const fs = require('fs');
            const fileName = 'environment.ts'; 
            const content = generateEnvironmentContent();
            process.chdir(`src/environments`); 
            fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
            })();
        break;
}
    // (function generateEnvironment() {
    // const fs = require('fs');
    // const fileName = 'environment.ts'; 
    // const content = generateEnvironmentContent();
    // process.chdir(`src/environments`); 
    // fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
    // })();
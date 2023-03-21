const fs = require('fs');
// Configure Angular `environment.ts` file path
// const targetPath = './src/environments/environment.ts';
// Load node modules
// const colors = require('colors');
// require('dotenv').load();
// `environment.ts` file structure
if(`${process.env.stage}` == "local"){
    var targetPath = './src/environments/environment.ts';
const envConfigFile = `export const environment = {
    production: "${process.env.IS_PRODUCTION || false}",
    environment: "${process.env.stage || "local"}",
    userName: "${process.env.USERNAME || "I am from Dynamic Environment :D"}",
    company: "${process.env.COMPANY || "I am from Dynamic Environment :D"}"
}`;
}
else if(`${process.env.stage}` == "dev"){
    var targetPath = './src/environments/environment.dev.ts';
    const envConfigFile = `export const environment = {
        production: "${process.env.IS_PRODUCTION || false}",
        environment: "${process.env.stage || "local"}",
        userName: "${process.env.USERNAME || "I am from Dynamic Environment :D"}",
        company: "${process.env.COMPANY || "I am from Dynamic Environment :D"}"
    }`;
}
else if(`${process.env.stage}` == "qa"){
    var targetPath = './src/environments/environment.qa.ts';
    const envConfigFile = `export const environment = {
        production: "${process.env.IS_PRODUCTION || false}",
        environment: "${process.env.stage || "local"}",
        userName: "${process.env.USERNAME || "I am from Dynamic Environment :D"}",
        company: "${process.env.COMPANY || "I am from Dynamic Environment :D"}"
    }`;
}
else if(`${process.env.stage}` == "prod"){
    var targetPath = './src/environments/environment.prod.ts';
    const envConfigFile = `export const environment = {
        production: "${process.env.IS_PRODUCTION || false}",
        environment: "${process.env.stage || "local"}",
        userName: "${process.env.USERNAME || "I am from Dynamic Environment :D"}",
        company: "${process.env.COMPANY || "I am from Dynamic Environment :D"}"
    }`;
}
fs.writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});
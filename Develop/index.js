const inquirer = require("inquirer");
const fs = require("fs");
// const open = require("open");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
    message: "What is your name?",
    name: "name"
},
{
    message: "What is your project title?",
    name: "title"
},
{
    message: "What is your projects description?",
    name: "desc"
}
// ,
// {
//     message: "What are your projects installation instructions?",
//     instructions: "instructions"
// },
// {
//     message: "What is your projects usage information?",
//     usage: "usage"
// }
];

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);



    await writeAsync(answers.name + ".md", htmlString)

}

// function call to initialize program
init();
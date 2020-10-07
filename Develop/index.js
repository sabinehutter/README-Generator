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
,
{
    message: "What are your projects installation instructions?",
    name: "instructions"
}
,
{
    message: "What is your projects usage information?",
    name: "usage"
}, 
{
    message: "What is your projects contribution guidelines?",
    name: "contribution_guideline"
}, 
{
    message: "What are the testing instructions for your application?",
    name: "test_instruct"
}, 
{
    message: "What are the testing instructions for your application?",
    name: "test_instruct",
    type : "list",
    choices : ["hi", "hey"]
}
];

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);



    await writeAsync(answers.name + ".md", htmlString)

}

// function call to initialize program
init();
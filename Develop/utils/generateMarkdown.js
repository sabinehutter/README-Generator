// function to generate markdown for README
function generateMarkdown(data) {
console.log(data)
  return (`# ${data.title}

  # Welcome to the ${data.title}'s Project Page! : 

  ## Description
    ${data.desc}

  ## Table of Contents


  ## Installation
    ${data.instructions}

  ## Usage
    ${data.usage}

  ## License

  ## Contributing
  ${data.contribution_guideline}

  ## Badges

  ## Tests
  ${data.test_instruct}

  ##Questions

  `)
}

module.exports = generateMarkdown;

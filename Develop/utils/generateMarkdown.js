// function to generate markdown for README
function generateMarkdown(data) {

  return (`# ${data.title}
  #### Welcome to ${data.name}'s Page! : 

  ## Use
    - like so....
    - my age: ${data.age}
    -other stuff
  `)
}

module.exports = generateMarkdown;

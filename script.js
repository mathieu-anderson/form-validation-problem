
function validate () {
//email validation variables
  const emailValue = document.getElementById('email').value;
  const atPosition = emailValue.indexOf('@')
  const dotPosition = emailValue.lastIndexOf('.')
//password validation variable
  const password = document.querySelector('#password').value
//colour validation variables
  const colourList = document.querySelector('#colour')
  const colour = colourList.options[colourList.selectedIndex].value
//animal validation variables
  const checked = [
    document.querySelector('#bear').checked,
    document.querySelector('#tiger').checked,
    document.querySelector('#snake').checked,
    document.querySelector('#donkey').checked
  ]
  //type of tiger validation variable
  const tigerType = document.querySelector('#tiger_type').value

  //email validation
  if (atPosition < 1 || dotPosition - atPosition < 2) {
    document.querySelector('#email').parentNode.className = 'error'
    return false
  //password validation
  } else if (password.length < 8) {
    document.querySelector('#password').parentNode.className = 'error'
    return false
  //colour validation
  } else if (!colour) {
    document.querySelector('#colour').parentNode.className = 'error'
    return false
  //animal validation
  } else if (checked.filter(function (animal) { return animal }).length < 2) {
    document.querySelector('#bear').parentNode.className = 'error'
    return false
  //type of tiger validation
  } else if (checked[1] && !tigerType.length) {
    document.querySelector('#tiger_type').parentNode.className = 'error'
    return false
  }
}

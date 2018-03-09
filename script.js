
function setErrorClass (id) {
  document.querySelector(id).parentNode.className = 'error'
}

function isChecked (id) {
  return document.querySelector(id).checked
}

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
    isChecked('#bear'),
    isChecked('#tiger'),
    isChecked('#snake'),
    isChecked('#donkey')
  ]
  //type of tiger validation variable
  const tigerType = document.querySelector('#tiger_type').value

  //email validation
  if (atPosition < 1 || dotPosition - atPosition < 2) {
    setErrorClass('#email')
    return false
  //password validation
  } else if (password.length < 8) {
    setErrorClass('#password')
    return false
  //colour validation
  } else if (!colour) {
    setErrorClass('#colour')
    return false
  //animal validation
  } else if (checked.filter(function (animal) { return animal }).length < 2) {
    setErrorClass('#bear')
    return false
  //type of tiger validation
  } else if (checked[1] && !tigerType.length) {
    setErrorClass('#tiger_type')
    return false
  }
}

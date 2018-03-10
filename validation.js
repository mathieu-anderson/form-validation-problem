let animalState = {
  bear: {
    checked: false
  },
  tiger: {
    checked: false
  },
  snake: {
    checked: false
  },
  donkey: {
    checked: false
  }
};

const setAnimalState = function (animal) {
  animalState[animal.value] = { checked: animal.checked };
};

const hideError = function (fieldId) {
  document
    .getElementById(fieldId)
    .parentElement
    .classList
    .remove('error');
  document
    .getElementById(fieldId + '-error-message')
    .classList
    .add('hidden');
};

const showError = function (fieldId) {
  document
    .getElementById(fieldId)
    .parentElement
    .classList
    .add('error');
  document
    .getElementById(fieldId + '-error-message')
    .classList
    .remove('hidden');
};

const validate = function (fieldId, validity) {
  if (!fieldId || !validity) {
    return;
  }

  if (validity.valid) {
    hideError(fieldId);
  } else {
    showError(fieldId);
  }
};

const validateAnimals = function () {
  let animals = 0;

  for (const animal in animalState) {
    if (animalState[animal].checked) {
      animals += 1;
    } else {
      animals += 0;
    }
  }

  if (animalState.tiger.checked) {
    showError('tiger_type');
  }

  if (!animalState.tiger.checked) {
    hideError('tiger_type');
  }

  if (animals < 2) {
    showError('animal');
  } else {
    hideError('animal');
  }
};

document.addEventListener('change', function (event) {
  if (event.target.name === 'animal') {
    setAnimalState(event.target);
    validateAnimals();
  }
  validate(event.target.id, event.target.validity);
}, true);

document.addEventListener('submit', function (event) {
  event.preventDefault();

  validateAnimals();

  const toValidate = [
    'email',
    'password',
    'colour'
  ];

  toValidate.forEach(field => {
    validate(field, document.querySelector('#' + field).validity);
  });
});

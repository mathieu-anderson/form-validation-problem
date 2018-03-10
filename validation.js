const hasError = function (fieldId, validity) {
  if (!fieldId || !validity) {
    return;
  }

  if (validity.valid) {
    document
      .getElementById(fieldId)
      .parentElement
      .classList
      .remove('error');
    document
      .getElementById(fieldId + '-error-message')
      .classList
      .add('hidden');
  } else {
    document
      .getElementById(fieldId)
      .parentElement
      .classList
      .add('error');
    document
      .getElementById(fieldId + '-error-message')
      .classList
      .remove('hidden');
  }
};

document.addEventListener('blur', function (event) {
  // Validate the field
  hasError(event.target.id, event.target.validity);
}, true);

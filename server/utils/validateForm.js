import validator from 'validator';

/**
 * Validate form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
export function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || validator.isEmpty(payload.email.trim()) || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || validator.isEmpty(payload.password.trim())) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

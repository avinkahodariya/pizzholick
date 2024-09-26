const validatePassword = (password) => {
  var re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (re.test(password)) {
    return true;
  } else {
    return false;
  }
};
export default validatePassword;

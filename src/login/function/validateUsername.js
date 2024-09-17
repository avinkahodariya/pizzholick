const validateUsername = (username) => {
  const re = /\W/;
  if (re.test(username)) {
    return true;
  } else {
    return false;
  }
};

export default validateUsername;

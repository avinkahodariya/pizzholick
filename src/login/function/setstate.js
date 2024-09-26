const setState = (state, setstate, value) => {
  value = value.trim();
  switch (state) {
    case "username": {
      setstate((state = value));
      break;
    }

    case "password": {
      setstate((state = value));
      break;
    }
    case "email": {
      setstate((state = value));
      break;
    }
    default: {
      setstate((state = value));
      break;
    }
  }
};
export default setState;

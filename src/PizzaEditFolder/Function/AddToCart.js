const addToCart = (data, props) => {
  let item = JSON.parse(localStorage.getItem("item"));
  console.log(item);
  if (item == null) {
    item = [];
    item.push(data);
    console.log(item);
    localStorage.setItem("item", JSON.stringify(item));
  } else {
    item.push(data);
    localStorage.setItem("item", JSON.stringify(item));
  }

  props.addcart(data);
};

export default addToCart;

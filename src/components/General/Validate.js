const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.name) {
    errors.name = "Customers name is required";
  }
  if (!values.address) {
    errors.address = "Delivery address is required";
  }
  return errors;
};
export default validate;

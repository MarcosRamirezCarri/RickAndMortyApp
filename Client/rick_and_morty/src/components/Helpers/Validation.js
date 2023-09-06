export default function Validate(register) {
    let errors = {};
    let regexEmail =
      /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    let regexPassword = /^(?=\w*\d)(?=\w*)(?=\w*[a-z])\S{8,16}$/;
  
    if (!regexEmail.test(register.username)) {
      errors.email = "Invalid Email";
    }
    if (!regexPassword.test(register.passWord)) {
      errors.password =
        "The password must have at least 8 to 16 character and one digit";
    }
  
    return errors;
  }
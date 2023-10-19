const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || "PESAAAAAN";

const encodeToken = (user) => {
    //DESTRUCTURING DATA FROM user
    const { id, username, name, image, description, phone, privatePhone } = user;

    //CHANGE DATA TO JWT
    let token = jwt.sign({ id, username, name, image, description, phone, privatePhone }, secretCode);

    //SEND JWT
    return token;
  };
  
  const decodeToken = (token) => {
    //COMPARE TOKEN JWT WITH SECRET CODE
    let result = jwt.verify(token, secretCode);

    //SEND RESULT COMPARE
    return result;
  };
  
  module.exports = {
    encodeToken,
    decodeToken,
  };
  
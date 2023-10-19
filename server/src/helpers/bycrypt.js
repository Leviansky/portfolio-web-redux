const bcrypt = require('bcrypt');
const saltRounds = 10;

const EncryptPwd = (data) => {
    //SEND ENCRYPT PASSWORD
    return bcrypt.hashSync(String(data), saltRounds);
}

const DecryptPwd = (data, encryptedPwd) => {
    //SEND DECRYPT PASSWORD
    return bcrypt.compareSync(String(data), encryptedPwd);
}

module.exports = {
    EncryptPwd,
    DecryptPwd
}
const {decodeToken} = require('../helpers/jwt')

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'unauthorized user' });
        }
        const accessToken = authHeader.split(' ')[1];
        const tokenDecode = decodeToken(accessToken);
        req.user = tokenDecode;
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    authUser,
};

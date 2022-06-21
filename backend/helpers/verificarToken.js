const jwt = require("jsonwebtoken");

 const verifyToken = async (token) => {
    try {
        return await jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;    
    }
 }

    module.exports = verifyToken;
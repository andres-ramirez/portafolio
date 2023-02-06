const verifyToken = require("../helpers/verificarToken");


const checkAuth = async (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];
    const decoded = await verifyToken(token);

    if (decoded) {
        next();
    }   else {
       return res.status(401).send("No autorizado");        
    }
    
}

module.exports = checkAuth;
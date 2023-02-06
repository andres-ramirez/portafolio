exports.checkOrigen = (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];
    
    if (token === process.env.JWT_SECRET) {
        next();
    } else {
        res.status(401).send("No autorizado");
    }
}



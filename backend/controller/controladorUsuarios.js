const modelUsers = require("../models/model.user");
const jwt = require("jsonwebtoken");
const {encriptar, comparar} = require("../helpers/encriptar");

exports.obtenerUsuarios = async (req, res) => {

  try {

    const data = await modelUsers.find();
    res.json(data);

  } catch (error) {

    console.log(error);
    res.status(500).res("Error en el get");

  }
};

exports.crearUsuario = async (req, res) => { 

  try {    

    const { usuario, pass, role } = req.body;
    const passEcriptado = await encriptar(pass);
    const user = await modelUsers.create({
      usuario,
      pass: passEcriptado,
      role
    });    

    // const token = jwt.sign({id: user._id, role: user.role},process.env.JWT_SECRET,{expiresIn: "1h",});

    res.send({
      data: user,
      // token
    })

  } catch (error) {
    console.log(error);
    res.status(500).res("Error en el post");
  }

};

exports.iniciarSesion = async (req, res,) => {

  try {

    const { usuario, pass } = req.body;
    const user = await modelUsers.findOne({ usuario });

    if (!user) {
      return res.status(404).send("El usuario no existe");            
    }
    
    const checkPass = await comparar(pass, user.pass);
    const tokenSesion = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: '5s' });

    if (checkPass) {
      res.send({
        data: user,
        token: tokenSesion
      })
    } else {
      res.status(404).send("La contraseña es incorrecta");
    }

  } catch (error) {
    console.log(error);
    res.status(500).res("Error en el post");
  }
};

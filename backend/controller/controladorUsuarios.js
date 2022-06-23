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
    const { usuario, contraseña, role } = req.body;
     const passEcriptado = await encriptar(contraseña);
    const user = await modelUsers.create({
      usuario,
      contraseña: passEcriptado,
      role
    });    

    const token = jwt.sign({id: user._id, role: user.role},process.env.JWT_SECRET,{expiresIn: "1h",});

    res.send({
      data: user,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).res("Error en el post");
  }
};

exports.iniciarSesion = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    const user = await modelUsers.findOne({usuario});
    const checkPass = await comparar(contraseña, user.contraseña);
    if (!user) return res.status(404).send("El usuario no existe");
    if (!checkPass) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).res("Error en el post");
  }
};

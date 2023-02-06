const bcrypt = require('bcryptjs');

const encriptar = async (password) => {

    return await bcrypt.hash(password, 10);
    
}

const comparar = async (password, hash) => {

    return  await bcrypt.compare(password, hash);
}

module.exports  = {encriptar, comparar};


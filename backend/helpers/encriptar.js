const bcrypt = require('bcryptjs');

const encriptar = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

const comparar = async (password, hash) => {
    const result = await bcrypt.compare(password, hash);
    return result;
}

module.exports  = {encriptar, comparar};


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


async function auth(email, password) {
    // busca o usuario pelo email 
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) return null;

    //compara a senha com hash com a senha do usuario
    const hashedPassword = await bcrypt.compare(password, user.password);
    if (!hashedPassword) return null

    return user;
}



module.exports = {
    auth

};
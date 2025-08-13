const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllUsers() {
    return prisma.user.findMany({
    });
}

async function createUser(data) {
    return prisma.user.create({
        data
    });
}

async function getUser(id) {
    return prisma.user.findFirst({
        where: { id: Number(id) }
    });
}

async function deleteUser(id) {
    return prisma.user.delete({
        where: { id: Number(id) }
    })
}

async function editUser(id, data) {
    return prisma.user.update({
        where: { id: Number(id) },
        data
    })
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    editUser,
    getUser
};
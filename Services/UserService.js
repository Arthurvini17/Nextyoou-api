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

module.exports = {
    getAllUsers,
    createUser,
    getUser
};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllUsers() {
    return prisma.user.findMany({
    });
}

async function createUser() {
    return prisma.user.create({
    });
}

module.exports = {
    getAllUsers
};
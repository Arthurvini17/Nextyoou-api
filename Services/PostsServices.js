const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

//função de buscar posts e puxar os usuarios associados
async function getPost(postId) {
    return prisma.post.findUnique({
        where: { id: Number(postId) },
        include: { user: true }
    })
}

//função de criar posts de acordo com o usuario logado
async function createPost(data, userId) {
    return prisma.post.create({
        data: {
            ...data,
            userId
        }
    })
}

async function editPost(data, userId) {
    return prisma.post.update({
        data: {
            ...data,
            userId
        }
    })

}

module.exports = {
    getPost,
    createPost,
    editPost

}
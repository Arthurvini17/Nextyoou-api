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

async function editPost(data, userId, id) {
    return prisma.post.update({

        //pega o id do usuario
        //o usuario so pode editar o respectivo post dele
        where: {
            id: Number(id), userId,

        },
        //
        data: {
            ...data,
            userId
        }
    })
}

async function deletePost(id, userId) {
    return prisma.post.deleteMany({
        where: {
            id: Number(id),
            userId
        }
    })
}

module.exports = {
    getPost,
    createPost,
    deletePost,
    editPost

}
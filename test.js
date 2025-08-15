const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
    try {
        const post = await prisma.post.findUnique({
            where: { id: 1 },
            include: { user: true }
        });
        console.log(post);
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

test();
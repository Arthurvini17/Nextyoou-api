const PostsServices = require('../Services/PostsServices');


//recebendo o id do post pelo body
module.exports = {
    getPost: async (req, res) => {
        const { id } = req.params;

        //verificando se o id é um numero 
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        //fazendo a consulta no banco, buscando o post por id
        try {
            const userWithPosts = await PostsServices.getPost(id);

            //se nao tiver retorna erro
            if (!userWithPosts) {
                return res.status(404).json({ message: 'Post não encontrado' });
            }
            //se for feito retorna o post
            return res.json(userWithPosts);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor' });
        }
    },


    createPost: async (req, res) => {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Você precisa preencher os campos' })
        }


        try {
            const result = await PostsServices.createPost(
                { title, description, },
                req.user.id
            );


            return res.status(200).json({ message: 'post criado', result });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'erro de servidor', error })
        }
    },


    //editando post do usuario
    editPost: async (req, res) => {

        const { id } = req.params;
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Voce precisa preencher os campos' });
        }

        try {
            const updatePosts = await PostsServices.editPost(
                //dados vindo da req body
                { title, description },
                //dados do usuario logado
                req.user.id,
                //id do post
                id
            );
            return res.status(200).json({ message: 'Post atualizado com sucesso', updatePosts });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'erro no servidor' })
        }
    },

    deletePost: async (req, res) => {
        const { id } = req.params;



        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID invalido' });
        }

        try {
            const deleteResult = await PostsServices.deletePost(id, req.user.id);

            if (deleteResult.count === 0) {
                return res.status(404).json({ message: 'Post não encontrado' });
            }



            return res.status(200).json({ message: 'Post deletado com sucesso' });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Erro no servidor', error });
        }
    }
};
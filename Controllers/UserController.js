const UserService = require('../Services/UserService');

module.exports = {
    getAllUsers: async (req, res) => {

        try {
            const users = await UserService.getAllUsers();
            console.log(users);
            if (!users || users.length === 0) {
                return res.status(404).json({ message: 'usuários não encontrados' });
            }
            return res.status(200).json({ message: 'busca de usuários', users });
        } catch (error) {
            return res.status(500).json({ message: 'Erro de servidor', error });
        }
    },

    createUser: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const createUser = await UserService.createUser(
                { name, email, password });
            if (!createUser) {
                return res.status(400).json({ message: 'Digite algo' });
            }

            return res.status(200).json({ message: 'usuario criado', createUser });
        } catch (error) {
            return res.status(500).json({ message: 'Erro de servidor', error });
        }
    },

    getUser: async (req, res) => {

        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID invalido', id });
        };
        try {
            const getaUser = await UserService.getUser(id);

            if (!getaUser) {
                return res.status(404).json({ message: 'usuario não encotrado' });
            }
            return res.status(200).json({ message: 'Usuario: ', getaUser });

        } catch (error) {
            return res.status(500).json({ message: 'erro no servidor', error })
        }
    }



}


const UserService = require('../Services/UserService');
const bcrypt = require('bcrypt');

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
        //criptografando a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const createUser = await UserService.createUser(
                { name, email, password: hashedPassword });
            if (!createUser) {
                return res.status(400).json({ message: 'Digite algo' });
            }

            return res.status(200).json({ message: 'usuario criado', createUser });
        } catch (error) {
            return res.status(500).json({ message: 'Erro de servidor', error });
        }
    },

    getUser: async (req, res) => {
        //passando id por parametro
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
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID invalido' });
        }

        try {
            const deleteaUser = await UserService.deleteUser(id);

            if (!deleteaUser) {
                return res.status(400).json({ message: 'Usuario não existe' })
            }

            return res.status(200).json({ message: 'Usuario deletado', id })
        } catch (error) {
            return res.status(500).json({ message: 'erro no servidor', error });
        }
    },


    editUser: async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'Id invalido' });
        }

        try {
            const editaUser = await UserService.editUser(id, data);

            return res.status(200).json({ message: 'usuario editado com sucesso', data });
        } catch (error) {
            return res.status(500).json({ message: 'erro no servidor' });
        }
    }



}


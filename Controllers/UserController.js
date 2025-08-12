const UserService = require('../Services/UserService');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'usuários não encontrados' });
        }
        return res.status(200).json({ message: 'busca de usuários', users });
    } catch (error) {
        return res.status(500).json({ message: 'Erro de servidor', error });
    }



}


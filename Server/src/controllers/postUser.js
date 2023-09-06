const { RegisterUser } = require('../DB_connection');


const postRegister = async (req, res) => {
    try {
        const { email, passWord } = req.query;
        console.log(req.query)


        const user = {
            email: email,
            passWord: passWord
        };

        const alreadyExist = await RegisterUser.findOne({ where: { email } });

        if (alreadyExist) {
            return res.status(200).json({access: true});
        }

        const newRegisterUser = await RegisterUser.create(user);

        return res.status(201).json(newRegisterUser);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    postRegister
}
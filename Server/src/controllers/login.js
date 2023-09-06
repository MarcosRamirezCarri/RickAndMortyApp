const { RegisterUser } = require('../DB_connection');

const login = async (req, res) =>{
    try {
        const { email, passWord } = req.query;

        console.log(req.query)

        if (!email || !passWord) return res.status(400).send
        ('Faltan datos')

            const user = await RegisterUser.findOne({
                where: { 
                    email 
                }
            })
            if (!user) return res.status(404).send('Usuario no encontrado')

            return user.passWord === passWord 
            ? res.status(200).json ({access: true})
            : res.status(403).send('Contraseña incorrecta')
        }
        catch (error) {
        return res.status(500).json({error: error.message});
    }
}
    


module.exports = {login};
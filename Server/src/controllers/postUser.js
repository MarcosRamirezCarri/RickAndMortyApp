const {User} = require('../DB_connection')

const postUser = async(req, res) =>{
    const {email, password} = req.body
    try {
        if(!email || !password){
            res.status(400).json({message: "Please enter all fields"})
        }
        const [user, create] = await User.findOrCreate({ where: {email, password}})
        res.status(200).json(user)
    }
     catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {postUser};

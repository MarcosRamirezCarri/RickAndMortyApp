const { User } = require('../DB_connection')

    const logIn = async(req, res) =>{
        const {email, password} = req.query
        try {
            if (!email || !password) {
              return res.status(400).json({ message: "Missing data" });
            }
            const user = await User.findOne({ where: { email } });
            if (!user) return res.status(404).json({ message: "User not found" });

            user.password = password
              ? res.status(200).json({ access: true })
              : res.status(403).json({ message: "Wrong password" });
        
            return { access: true };
          } catch (error) {
            res.status(500).send(error.message);
            console.log(error.message);
          }
    }
    


module.exports = {logIn};
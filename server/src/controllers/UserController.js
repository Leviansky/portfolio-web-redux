const {User, Education, Experience, Organitation, Post  } = require('../../models')
const {EncryptPwd, DecryptPwd} = require('../helpers/bycrypt')
const {encodeToken} = require('../helpers/jwt')

class UserController {
    static async register(req,res) {
        try {
            const {username, password, verifPassword} = req.body;
            if(password !== verifPassword) {return res.status(401).json({message: "Password must be same"})}
            let checkUsername = await User.findOne({
                where: {username}
            })
            if(!checkUsername) {
                let hashPwd = EncryptPwd(password)
                let result = await User.create({username, password: hashPwd})
                return res.status(201).json(result);
            } else {
                return res.status(401).json({message: `${username} not available`})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async login(req,res) {
        try {
            const {username, password} = req.body;
            let data = await User.findOne({
                where: {username}
            })
            if(!data) {return res.status(400).json({message: "Username not found"})}
            let match = DecryptPwd(password,data.password)
            if(!match) {return res.status(400).json({message: "Wrong Password"})}
            let token = encodeToken(data)
            let result = {
                id:data.id,
                username:data.username,
                name:data.name,
                image:data.image,
                description:data.description,
                phone:data.phone,
                access_token:token
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async edit(req,res) {
        try {
            const id = +req.user.id;
            const {name, image, address} = req.body;
            let result = await User.update({name, image, address},{ where: {id}})
            result[0] === 1
            ? res.status(200).json({message: `Update has been success`})
            : res.status(401).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async detailUser(req,res) {
        try {
            const id = +req.user.id;
            let result = await User.findOne({
                where: { id },
                include: [
                  {
                    model: Education,
                    order: [['year', 'DESC']],
                  },
                  {
                    model: Experience,
                    order: [['createdAt', 'DESC']],
                  },
                  {
                    model: Organitation,
                    order: [['createdAt', 'DESC']],
                  },
                  {
                    model: Post,
                    order: [['createdAt', 'DESC']],
                  }
                ]
              });
              
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = UserController;
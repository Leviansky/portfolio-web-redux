const { Education } = require('../../models')

class EducationController {
    static async create(req,res) {
        try {
            const UserId = +req.user.id;
            const { name, level, year } = req.body;
            let result = await Education.create({name, level, year, UserId})
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getEducations(req,res) {
        try {
            const UserId = +req.user.id;
            let educations = await Education.findAll({where:{UserId}})
            res.status(200).json(educations)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req,res) {
        try {
            const id = +req.params.id;
            let result = await Education.destroy({where:{id}})
            result === 1
            ? res.status(200).json({message:"Delete education success"})
            : res.status(401).json({message:"Delete education failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async edit(req,res) {
        try {
            const id = +req.params.id;
            const { name, level, year } = req.body;
            let result = await Education.update({ name, level, year },{where:{id}})
            result[0] === 1
            ? res.status(200).json({message:"Update education success"})
            : res.status(401).json({message:"Updata education failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = EducationController
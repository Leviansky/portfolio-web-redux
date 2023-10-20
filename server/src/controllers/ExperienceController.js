const { Experience } = require('../../models')

class ExperienceController {
    static async create(req,res) {
        try {
            const UserId = +req.user.id;
            const { name_company, role, jobdesk } = req.body;
            let result = await Experience.create({name_company, role, jobdesk, UserId})
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getExperiences(req,res) {
        try {
            const UserId = +req.user.id;
            let Experiences = await Experience.findAll({where:{UserId}})
            res.status(200).json(Experiences)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req,res) {
        try {
            const id = +req.params.id;
            let result = await Experience.destroy({where:{id}})
            result === 1
            ? res.status(200).json({message:"Delete Experience success"})
            : res.status(401).json({message:"Delete Experience failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async edit(req,res) {
        try {
            const id = +req.params.id;
            const { name_company, role, jobdesk } = req.body;
            let result = await Experience.update({ name_company, role, jobdesk },{where:{id}})
            result[0] === 1
            ? res.status(200).json({message:"Update Experience success"})
            : res.status(401).json({message:"Updata Experience failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = ExperienceController
const { Organitation } = require('../../models')

class ExperienceController {
    static async create(req,res) {
        try {
            const UserId = +req.user.id;
            const { name, role } = req.body;
            let result = await Organitation.create({name, role, UserId})
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getOrganitations(req,res) {
        try {
            const UserId = +req.user.id;
            let Experiences = await Organitation.findAll({where:{UserId}})
            res.status(200).json(Experiences)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req,res) {
        try {
            const id = +req.params.id;
            let result = await Organitation.destroy({where:{id}})
            result === 1
            ? res.status(200).json({message:"Delete Organitation success"})
            : res.status(401).json({message:"Delete Organitation failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async edit(req,res) {
        try {
            const id = +req.params.id;
            const { name, role, jobdesk } = req.body;
            let result = await Organitation.update({ name, role, jobdesk },{where:{id}})
            result[0] === 1
            ? res.status(200).json({message:"Update Organitation success"})
            : res.status(401).json({message:"Update Organitation failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = ExperienceController
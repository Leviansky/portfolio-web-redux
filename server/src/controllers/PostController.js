const { Post, User } = require('../../models')

class PostController {
    static async create(req,res) {
        try {
            const UserId = +req.user.id;
            const { image, title, content } = req.body;
            let result = await Post.create({image, title, content, UserId})
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getPosted(req,res) {
        try {
            const UserId = +req.user.id;
            let posts = await Post.findAll({where:{isPosting:true},include:[User], order: [['updatedAt', 'desc']]})
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getAllPost(req,res) {
        try {
            const UserId = +req.user.id;
            let posts = await Post.findAll({where:{UserId},include:[User], order: [['createdAt', 'desc']]})
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async changeStatusPosting(req,res) {
        try {
            const id = +req.params.id;
            let post = await Post.findOne({where:{id}})
            post.isPosting = !post.isPosting;
            let result = await Post.update({isPosting:post.isPosting},{where:{id}})
            result[0] === 1
            ? post.isPosting
              ? res.status(200).json({message:"Posting success"})
              : res.status(200).json({message:"Retrieve Post success"})
            : res.status(401).json({message:"Posting failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async edit(req,res) {
        try {
            const id = +req.params.id;
            const { image, title, content } = req.body;
            let result = await Post.update({image,title,content},{where:{id}})
            result[0] === 1
            ? res.status(200).json({message:"Update posting success"})
            : res.status(401).json({message:"Updata posting failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req,res) {
        try {
            const id = +req.params.id;
            let result = await Post.destroy({where:{id}})
            result === 1
            ? res.status(200).json({message:"Delete posting success"})
            : res.status(401).json({message:"Delete posting failed"})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PostController
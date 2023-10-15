const express = require('express')
const Post = require('../models/post')

const createPost = async (req, res) =>{
    try {
        const { ...post } = req.body;
        const newPost = await Post({
            title: post.title, subtitle: post.subtitle, avatar: post.avatar, description: post.description
        })

        const postDB = await newPost.save()
        res.status(201).json(postDB)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const response = await Post.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params
        await Post.findByIdAndDelete(postId)
        res.status(200).json({ message: "Post Eliminado"})
      } catch (error) {
        res.status(400).json(error)
      } 
}

module.exports = {
    createPost,
    getAllPosts,
    deletePost
}
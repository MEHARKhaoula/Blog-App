import {db} from "../db.js"

export const getPosts = (req,res) =>{
   const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts WHERE cat=?"
   if(err) return res.send(err)

   return res.status(200).json(data)
}

export const getPost = (req,res) =>{
    res.json("from controller")
}

export const addPost = (req,res) =>{
    res.json("from controller")
}

export const deletePost = (req,res) =>{
    res.json("from controller")
}

export const updatePost = (req,res) =>{
    res.json("from controller")
}

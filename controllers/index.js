const express = require('express');
const router = express.Router();

const userRoutes = require("./api/user-routes.js");
router.use("/api/users",userRoutes)

const blogRoutes = require("./api/blog-routes");
router.use("/api/blogs",blogRoutes)

const commentRoutes = require("./api/comment-routes");
router.use("/api/comments",commentRoutes)

const frontEnd = require("./api/home-routes");
router.use("/",frontEnd)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;
const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "heather",
        password: "password"
    },
    {
        username: "leslie",
        password: "password"
    },
    {
        username: "william",
        password: "password"
    },

]

const blogs = [
    {
        title: "Heather's blog",
        content: "Fun",
        userId: 1
    },
    {
        title: "Leslie's blog",
        content: "Vacation",
        userId: 1
    },
    {
        title: "William's blog",
        content: "Work",
        userId: 2
    },
    {
        title: "Sadie's blog",
        content: "School",
        userId: 3
    },
]

const comments = [
    {
        body: "Awesome post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "Can't wait!",
        blogId: 3,
        userId: 2
    },
    {
        body: "This is wonderful!",
        blogId: 4,
        userId: 1
    },
    {
        body: "School is fun!",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()
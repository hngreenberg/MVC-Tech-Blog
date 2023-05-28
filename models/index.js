const User = require("./User");
const Blog = require("./post");
const Comment = require("./Comment");

User.hasMany(Blog);
Blog.belongsTo(User);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = {
    User, Blog, Comment
   
}
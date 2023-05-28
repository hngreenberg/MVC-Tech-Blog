const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', user-routes);
router.use('/blogs, blog-routes');
router.user('/comments', comment-routes);

module.exports = router;
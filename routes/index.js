var express = require('express');
var router = express.Router();
const {Comment, Reply} = require('../models');
const articleController = require('../controllers/articleController');
const commentController = require('../controllers/commentController');
router.get('/', function(req, res) {
  res.redirect('/article');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/article/add', articleController.renderAddForm);
router.post('/article/add', articleController.addArticle);

router.get('/article/:articleId/edit', articleController.renderEditForm);
router.post('/article/:articleId/edit', articleController.updateArticle);

router.get('/article/:articleId', articleController.displayArticle);
router.get('/article/', articleController.displayAll);

router.get('/article/:articleId/delete', articleController.deleteArticle);

router.post('/article/:articleId/comment/create', commentController.createComment);

router.post('/comment/:commentId/reply/create', commentController.addReply);
module.exports = router;
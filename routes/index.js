var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');
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
module.exports = router;
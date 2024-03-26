const csvController = require('../controllers/fileCsv.controller');
const { isLoggedIn } = require('../middleware/auth');
const multer = require('multer');


module.exports = app => {
  const router = require('express').Router();

  const upload = multer({ dest: 'uploads/' });

  router.get('/get', isLoggedIn, csvController.getCsv);

  router.get('/getallespace',isLoggedIn, csvController.getAllEspace);

  router.get('/getjeu/:planZone',isLoggedIn, csvController.getJeuByEspace)

  router.post('/post', isLoggedIn, upload.single('file'), csvController.importCsv);

  app.use('/csv', router);
};
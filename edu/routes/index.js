var express = require('express');
var router = express.Router();
var customerCtrl = require('../controller/customerCtrl');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/newcustomer',function(req, res, next) {
  customerCtrl.newcustomer(req,res)
  
  
});
router.post('/creatcustomer',function(req, res, next) {
  customerCtrl.CreatCustomer(req,res)
});

module.exports = router;

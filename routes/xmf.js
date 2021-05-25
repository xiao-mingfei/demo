let express = require('express');
let  router = express.Router();
let User =require('./bean/User');

router.get('/',(req,res) =>{
    res.render('xmf');
})

router.post('/',(req,res) =>{
   let user= new User( req.body.name, req.body.pass);
   console.log(user);
   req.session.user =user;
   res.send("register success");
})

module.exports = router;

const router = require('express').Router();


router.get('/getAll', async (req,res,next)=>{
    res.send("{mesg:'hello',name:'indu'}");
});

router.post('/add', async (req,res,next)=>{
    res.send("successfully added");
});



module.exports = router;
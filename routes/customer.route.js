const router = require('express').Router();


router.get('/getAll', async (req,res,next)=>{
    res.send("{mesg:'hello',name:'indu'}");
})


module.exports = router;
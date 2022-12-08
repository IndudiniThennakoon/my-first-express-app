const router = require('express').Router();


router.get('/getAll', async (req,res,next)=>{
    res.send("{mesg:'hello',name:'indu'}");
});

router.post('/add', async (req,res,next)=>{
    res.send("successfully added");
});

router.put('/update',async(req,res,next)=>{
    res.send("successfully updated");
});



module.exports = router;
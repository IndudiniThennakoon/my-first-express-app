const router = require('express').Router();
const {deleteCustomer,addCustomer,getAll,searchCustomer,updateCustomer} =require("../controller/customer.controller");


router.get('/getAll', async (req,res,next)=>{
    getAll(req,res,next);
});

router.post('/add', async (req,res,next)=>{
    addCustomer(req,res,next);
});

router.put('/update',async(req,res,next)=>{
    updateCustomer(req,res,next);
 
});

router.delete('/delete',async(req,res,next)=>{
    deleteCustomer(req,res,next);
});

router.get('/:id',async(req,res,next)=>{
    searchCustomer(req,res,next);
});



module.exports = router;
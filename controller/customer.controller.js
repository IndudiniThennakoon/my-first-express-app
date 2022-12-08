const mysqlConnection = require("../config/config");


// create controller functions - way 1
function getAll(req,res,next){
    console.log("ewwwwwwwwwwwwww");

};

// create controller functions - way 2
const updateCustomer = (req,res,next)=>{

}

const deleteCustomer = (req,res,next)=>{

}

const addCustomer = (req,res,next)=>{

}

const searchCustomer = (req,res,next)=>{

}

module.exports = {
    getAll,
    addCustomer,
    deleteCustomer,
    updateCustomer,
    searchCustomer
};

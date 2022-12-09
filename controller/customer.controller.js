const mysqlConnection = require("../config/config");

// create controller functions - way 1
function getAll(req, res, next) {
    mysqlConnection.query("SELECT * FROM CustomerTable",(err,rows,feild)=>{
        if(!err){
            res.status(200).json({
                data: rows,
                message : "All customer details"
            });
        }else{
            res.status(404).json({
                message: "Error Occured"
            });
            console.log(err);
        }
    });
 
}



// create controller functions - way 2
const addCustomer = (req, res, next) => {
    const customers = req.body;
    mysqlConnection.query("INSERT INTO CustomerTable(Name,email,Mobile,Address) Values (?,?,?,?)",[customers.name,customers.email,customers.mobile,customers.address],(err,rows,feild)=>{
        if(!err){
            res.status(200).json({
                message : "Insert customer details"
            });
        }else{
            res.status(404).json({
                message: "Error Occured"
            });
            console.log(err);
        }
    });
};

const updateCustomer = (req, res, next) => {};

const deleteCustomer = (req, res, next) => {};

const searchCustomer = (req, res, next) => {};

module.exports = {
  getAll,
  addCustomer,
  deleteCustomer,
  updateCustomer,
  searchCustomer,
};

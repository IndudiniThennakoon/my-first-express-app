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

const updateCustomer = (req, res, next) => {
    const customer = req.body;
    mysqlConnection.query("Update CustomerTable SET Name= ?,email=?,Mobile=?,Address=? WHERE Id=?",[customer.name,customer.email,customer.mobile,customer.address,customer.Id],(err,rows,feild)=>{
        if(!err){
            res.status(200).json({
                message : "Updated customer details"
            });
        }else{
            res.status(404).json({
                message: "Error Occured"
            });
            console.log(err);
        }
    });
};

const deleteCustomer = (req, res, next) => {
   const customerID =  req.body.Id;
    mysqlConnection.query("DELETE FROM CustomerTable WHERE Id=?",[customerID],(err,rows,feild)=>{
        if(!err){
            res.status(200).json({
                message : "Deleted customer details"
            });
        }else{
            res.status(404).json({
                message: "Error Occured"
            });
            console.log(err);
        }
    });
};



module.exports = {
  getAll,
  addCustomer,
  deleteCustomer,
  updateCustomer,
  searchCustomer,
};

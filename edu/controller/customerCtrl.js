var customer = require('../model/customer');

exports.CreatCustomer=function(req,res)
{
    var entry=new customer(

        {
            Name:req.body.Name,
            phone:req.body.Phone,
            address:req.body.Address
        }
    );

    entry.save();

    //res.render('/');
    res.redirect(301,'/')

}
exports.newcustomer=function(req,res)
{
    res.render('newcustomer',{title:"new customer"});
}
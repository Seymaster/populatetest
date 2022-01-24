const User = require("../models/User")

exports.createUser = async (req, res, next) =>{
    const {name, email} = req.body;
    const newUser = User({name, email})
    try{
        let data = await newUser.save()
        res.status(200).send({
            status:200,
            message: "User created successfully",
            data: data
        });
    }catch(err){
        if(err.code == 11000) {
            let error = err['errmsg'].split(':')[2].split(' ')[1].split('_')[0];
            res.status(500).send({
                message: `${error} User saved already`,
                status: 11000,
                error: err
            });
            return false;
        }
        console.log(err)
        res.status(500).send({
            status:500,
            message:"Could not save Emergency Contacts"
        });
        }
}


exports.getUser = async (req,res,next)=>{
    let {...query} = req.query;
    try{
    let data = await User.find(query).populate("todos")
        res.status(200).send({
            status: 200,
            message: "User Loaded Successfully",
            data: data
        })
    }catch(err){
        res.status(500).send({
            status: 500,
            message: "No user available",
            err: err
        })
    }   

}
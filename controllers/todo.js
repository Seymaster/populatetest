const Todo = require("../models/Todo")
const mongoose = require("mongoose");

exports.createTodo = async (req, res, next) =>{
    let {owner, todo} = req.body;
    owner = mongoose.Types.ObjectId(owner)
    const newTodo = Todo({owner, todo})
    try{
        let data = await newTodo.save()
        res.status(200).send({
            status:200,
            message: "Todo created successfully",
            data: data
        });
    }catch(err){
        if(err.code == 11000) {
            let error = err['errmsg'].split(':')[2].split(' ')[1].split('_')[0];
            res.status(500).send({
                message: `${error} Todo saved already`,
                status: 11000,
                error: err
            });
            return false;
        }
        console.log(err)
        res.status(500).send({
            status:500,
            message:"Could not save Todo"
        });
        }
}


exports.getTodos = async (req,res,next)=>{
    let {id} = req.params;
    try{
    let data = await Todo.find({id:id}).populate("user")
        res.status(200).send({
            status: 200,
            message: "Todo Loaded Successfully",
            data: data
        })
    }catch(err){
        res.status(500).send({
            status: 500,
            message: "No Todo for this user",
            err: err
        })
    }   

}
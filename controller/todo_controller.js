const { json } = require('body-parser');
const todoServices = require('../services/todo_services');

exports.createTodo = async (req, res, next) => {
    try {
        const { userId, title, desc } = req.body;
        let todo = await todoServices.createTodo(userId, title, desc);
        res.json({ status: true, success: todo });
    } catch (e) {
        throw e;
    }
}


exports.getUserTodoList = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const todoList = await todoServices.getUserTodo(userId);
        res.json({ status: true, success: todoList });
    } catch (e) {
        throw e;
    }
}


exports.deleteToDo = async (req,res,next)=>{
    try{
        const { id } = req.body;
        const deleteStatus = await todoServices.deleteTodo(id);
        res.json({status:true,success:deleteStatus});
    }catch(e){
      throw e;
    }
}
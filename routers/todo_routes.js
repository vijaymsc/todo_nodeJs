const route = require('express').Router();
const todoController = require('../controller/todo_controller');

route.post('/todoCreation',todoController.createTodo);

route.get('/getUserTodoList',todoController.getUserTodoList);

route.post('/deleteTodo',todoController.deleteToDo);

module.exports = route;
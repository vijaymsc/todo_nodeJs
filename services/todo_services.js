const todoModel = require('../model/todo_model')


class todoServices {

    static async createTodo(userId, title, desc) {
        try {
            const createTodoData = new todoModel({ userId, title, desc });
            return await createTodoData.save();
        } catch (e) {
            throw e;
        }
    }

    static async getUserTodo(userId) {
        try {
            const todo = await todoModel.find({ userId });
            return todo;
        } catch (e) {
            throw e;
        }
    }

    static async deleteTodo(id) {
        try {
            const deleted = await todoModel.findByIdAndDelete({_id:id});
          return deleted;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = todoServices;
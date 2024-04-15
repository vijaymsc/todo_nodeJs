const userModel = require('../model/user_model');
const jwt = require("jsonwebtoken");

class UserService{
static async RegisterUser(email, password){
    try{
        const createUser = new userModel({email,password});
        return await createUser.save();

    }catch(error){
         throw error;
    }
}


static async getUserByEmail(email){
    try{
        return await userModel.findOne({email});
    }catch(err){
        console.log(err);
    }
}

static async checkUser(email){
try{
  return await userModel.findOne({email});
}catch(e){
    throw e;
}
}

static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
    return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
}
}

module.exports = UserService;
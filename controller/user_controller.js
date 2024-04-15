const UserService = require('../services/user_services');

exports.register =  async(req,res,next)=>{
    try{
        const {email, password} = req.body;
        const successRes = await UserService.RegisterUser(email,password);
        res.json({status:true,success:"User Registered Sucessfully"});

    }catch(error){
        throw error;
    }
}

exports.login =  async(req,res,next)=>{
    try{
        const {email, password} = req.body;
        const user = await UserService.checkUser(email);
        if(!user){
            throw new Error('User dont exists');  
        }
        const isPasswordCorrect = await user.comparePassword(password);

        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }
        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    

        const token = await UserService.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ status: true, success: "sendData", token: token });
       

    }catch(error){
        throw error;
    }
}
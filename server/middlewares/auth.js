// import jwt from 'jsonwebtoken'

// const userAuth = async(req,res,next)=>{
//     const token=req.headers.token;
//     if(!token){
//         // console.log(error);
//         res.json({success:false,message:'Not Authorized. Login Again'})
//     }
//     try{
//         const tokenDecode=jwt.verify(token,process.env.JWT_SECRET);
//         if(tokenDecode.id){
//             req.body.userId = tokenDecode.id;
//         }else{
//         return res.json({success:false,message:'Not Authorized. login Again'})
//         }
//         next();
//     }catch(error){
//         res.json({success:false,message:error.message})
//     }
// };

// export default userAuth;

import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {

    const token = req.headers.token;

    // FIX 1: add return here
    if (!token) {
        return res.json({
            success: false,
            message: "Not Authorized. Login Again"
        });
    }

    try {

        const tokenDecode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if (tokenDecode.id) {

            // FIX 2: use req.userId instead of req.body.userId
            req.userId = tokenDecode.id;

        } else {

            return res.json({
                success: false,
                message: "Not Authorized. Login Again"
            });

        }

        next();

    } catch (error) {

        return res.json({
            success: false,
            message: error.message
        });

    }

};

export default userAuth;



const authenticate = async(req,res,next)=>{
     try {
        const {userId} = await req.auth()
        req.userId = userId
        next()
     } catch (error) {
        res.status(404).json({errorMessage:"authentication failed"})
     }
};

module.exports = authenticate
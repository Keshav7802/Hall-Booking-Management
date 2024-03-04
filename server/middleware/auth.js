import jwt from "jsonwebtoken";

const secret = 'test';
const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token,secret); //secret has to be the same as we created in the token ('test)

            req.userId = decodedData?.id; 
        }
        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;
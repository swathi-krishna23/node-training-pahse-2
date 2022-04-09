import express from "express";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import RequestWithUser from "../util/rest/request";
import jsonwebtoken from "jsonwebtoken";
import APP_CONSTANTS from "../constants";
const authorize = (roles?: string[] ) => {
 return async (
   req: RequestWithUser,
   res: express.Response,
   next: express.NextFunction
 ) => {
   try {
     const token = getTokenFromRequestHeader(req);
     console.log(token)
     jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
     const decodedToken=jsonwebtoken.decode(token)
     const tokenDetails = JSON.parse(JSON.stringify(decodedToken));
     if(roles.includes(tokenDetails.role)){
      next();
     } else {
       console.log("test");
       throw new UserNotAuthorizedException();
     }
     
   } catch (error) {
     next(error);
   }
 };
};
const getTokenFromRequestHeader = (req: RequestWithUser) => {
    const tokenWithBearerHeader = req.header(
      `${APP_CONSTANTS.authorizationHeader}`
    );
    if (tokenWithBearerHeader) {
      return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, "");
    }
    return "";
   };

export default authorize;
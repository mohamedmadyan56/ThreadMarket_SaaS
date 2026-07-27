import jwt from "jsonwebtoken"
import { ENV } from "../../config/env";

class TokenService {
 public generateAccessToken(payload:object):string{
    return jwt.sign(payload,ENV.ACCESS_TOKEN_SECRET!,{
        expiresIn:Number(ENV.ACCESS_TOKEN_EXPIRY),
    })
 }   
}
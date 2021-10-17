import  Express  from "express";
import {login, register, logout} from '../controllers/AccountController.js'

//  Account Router
const AccountRoute = Express.Router();


AccountRoute.get("/register", (req, res)=>register(req, res));


AccountRoute.get("/login", (req, res)=> login(req, res));


AccountRoute.get('/logout', (req, res)=> logout(req, res));

export {
    AccountRoute

} 
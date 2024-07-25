import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, userOrders } from "../controllers/orderController.js"


const orderRouter = express.Router();

orderRouter.post("/order",authMiddleware,placeOrder);
orderRouter.post("/userorders",authMiddleware,userOrders)

export default orderRouter;
import userModel from "../models/userModel.js"


// add item to user cart

const addToCart = async (req,res) =>{
try {
    let userData = await userModel.findOne({_id:req.body.userId});
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1
    }
    else{
        cartData[req.body.itemId] +=1;

    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({sucess:true, message:"Added to cart"});

} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"})
}
}




//remove item from cart

const removeFromCart = async (req,res) => {
try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId]>0){
cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
res.json({sucess:true, message:"Removed from cart"})
} catch (error) {
    console.log(error);
    res.json({sucess:false, message:"error"})
    
}


}



//fetch user cart data

const getCart = async (req,res) =>{
try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({sucess:true, cartData})
} catch (error) {
    console.log(error);
    res.json({sucess:false, message:"Error"})
}

}
const updateCartData = async (userId, cartData) => {
    try {
        // Ensure cartData is an array
        if (!Array.isArray(cartData)) {
            throw new Error("Cart data must be an array");
        }

        await userModel.findByIdAndUpdate(userId, { cartData: cartData });
        console.log("Cart data updated successfully");
    } catch (error) {
        console.log("Error updating cart data:", error);
    }
};



export { addToCart, removeFromCart, getCart}
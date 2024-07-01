import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";



const Add = () => {
  const url = "http://localhost:5000";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Rolls",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };



  // check in the web page (console)whether the code is working or not
// useEffect(()=>{
// console.log(data);
// },[data])




  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    console.log("Submitting form with data: ", {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      image: image,
    });

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Rolls",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error submitting the form!");
    }
  };

  return (
    <>
      <div className="add w-2/5 ml-7 mt-12 bg-gray-100 font-normal font-serif">
        <form className="flex-col flex gap-3 px-4" onSubmit={onSubmitHandler}>
          <div className="add-img w-32">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>
          <div className="add-product-name w-3/5">
            <p>Product name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type here"
              className="w-full p-2"
            />
          </div>
          <div className="add-product-description flex-col w-3/5">
            <p>Product description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write content here"
              className="w-full"
            ></textarea>
          </div>
          <div className="add-category-price flex gap-8">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select
                onChange={onChangeHandler}
                name="category"
                className="p-2 ml-4 bg-white"
              >
                <option value="Rolls">Rolls</option>
                <option value="Salad">Salad</option>
                <option value="Desert">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col w-2/4">
              <p>Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                className="p-2"
                type="Number"
                name="price"
                placeholder="Rs."
              />
            </div>
          </div>
          <button
            type="submit"
            className="add-btn max-w-28 border ring-slate-700 p-3 bg-orange-400 hover:bg-orange-500 text-white cursor-pointer rounded-md"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
















// import React, {  useState } from "react";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Add = () => {

// const url ="http://localhost:5000"

// const [image,setImage]= useState (false);
// const [data,setData]= useState({
//   name:"",
//   description: "",
//   price:"",
//   category:"Rolls"
// })


// const onChangeHandler =(event)=>{
// const name = event.target.name;
// const value = event.target .value;
// setData(data=>({...data,[name]:value}))
// }


// check in the web page (console)whether the code is working or not
// useEffect(()=>{
// console.log(data);
// },[data])


// const onSubmitHandler =async(event)=>{
//   event.preventDefault();
//   const FormData = new FormData.append("name",data.name)
//   FormData.append("description",data.description)
//   FormData.append("price",Number(data.price))
//   FormData.append("category",data.category)
//   FormData.append("image",image)

//   const response = await axios.post(`${url}/api/food/add`,FormData)
// if(response.data.success){
// setData({
//   name:"",
// description: "",
// price:"",
// category:"Rolls"
// })
// setImage(false)
// toast.success(response.data.message)
// }
// else{
// toast.error(response.data.message)
// }
// }



//   return (
//     <>
//       <div className="add w-2/5 ml-7 mt-12  bg-gray-100 font-normal font-serif">
//         <form className="flex-col flex  gap-3 px-4">
//           <div className="add-img w-32 ">
//             <p>Upload Image</p>
//             <label htmlFor="image">
//               <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
//             </label>
//             <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
//           </div>
//           <div className="add-product-name w-3/5">
//             <p>Product name</p>
//             <input onChange={onChangeHandler} value={data.name}
//               type="text"
//               name="name"
//               placeholder="Type here"
//               className=" w-full p-2"
//             />
//           </div>
//           <div className="add-product-description  flex-col w-3/5">
//             <p>Product description</p>
//             <textarea onChange={onChangeHandler} value={data.description}
//               name="description"
//               rows="6"
//               placeholder="Write content here"
//               className="w-full"
//             ></textarea>
//           </div>
//           <div className="add-category-price flex gap-8">
//             <div className="add-category flex-col">
//               <p>Product Category</p>
//               <select onChange={onChangeHandler}  name="category" className="p-2 ml-4 bg-white">
//                 <option value="Rolls">Rolls</option>
//                 <option value="Salad">Salad</option>
//                 <option value="Desert">Deserts</option>
//                 <option value="Sandwich">Sandwich</option>
//                 <option value="Cake">Cake</option>
//                 <option value="Pure Veg">Pure Veg</option>
//                 <option value="Pasta">Pasta</option>
//                 <option value="Noodles">Noodles</option>
//               </select>
//             </div>
//             <div className="add-price flex-col w-2/4">
//               <p>Product Price</p>
//               <input onChange={onChangeHandler} value={data.price}
//                 className="p-2 "
//                 type="Number"
//                 name="price"
//                 placeholder="Rs."
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="add-btn max-w-28 border ring-slate-700 p-3  bg-orange-400 hover:bg-orange-500 text-white cursor-pointer rounded-md  "
//           >
//             ADD
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Add;

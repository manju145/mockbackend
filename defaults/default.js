import { products } from "../connect/data";
import { Product } from "../model/doctor";

const DefaultData= async()=>{
try{
    // await Product.deleteMany({})
    await Product.insertMany(products);

console.log("Product Data Imported Successfully")
}catch(err){
    console.log('err while inserting default data', err.message);
}
}


export default DefaultData;

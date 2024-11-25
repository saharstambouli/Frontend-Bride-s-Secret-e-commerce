import axios from 'axios'
axios.defaults.baseURL=" http://localhost:10000"
// axios.defaults.baseURL=process.env.PUBLIC_API_BASE


export async function getProducts()
{   
    try {
        const response=await axios.get('/product/getproducts');
       console.log('response',response)
       
        if (response.status==200)
            return response.data
    } catch (error) {
        console.log(error)
        return false;
        
    }
}

export async function getProductBycategory(category)
{   
    try {
        const response=await axios.get(`/product/getproducts/${category}`);
        if (response.status==200)
            return response.data
    } catch (error) {
        console.log(error)
        return false;
        
    }
}

export async function getProductByID(id) {

    try {
        const response = await axios.get(`/product/getproduct/${id}`);
        if (response.status == 200)
            return response.data
    } catch (error) {
        console.log(error)
        return false;

    }
}
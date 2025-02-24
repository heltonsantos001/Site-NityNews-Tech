import axios from "axios";

export const GetNews = async () =>{
    
    try{
        const response = await axios.get("/user");
        return response.data;
    }catch(er){
        console.error("erro ao buscar news: ", er)
        return [];
    }
}
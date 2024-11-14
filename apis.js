import commonAPI from "./apicall";

export const weathercallApi = async (location)=>{
    return await commonAPI("GET",`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`,"")
}

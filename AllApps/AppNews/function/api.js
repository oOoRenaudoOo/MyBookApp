import axios from "axios";

//Url de l'api
// const urlApi = "https://newsapi.org/v2/everything";

//Url de l'api GNews.io
const urlApi = "https://gnews.io/api/v4/search";

// La cle de l'api
// const apiKey = "1bffdd1111f1497c8fce292a81d8e54e";


const apiKey = "2c135b19e949b8f79d28e865dcbc039b";

export const apiNews = async (page) => {
    // const params = {
    //     q: "Apple",
    //     from: "2022-08-24",          
    //     sortBy: "popularity",
    //     apiKey: apiKey,
    //     page: page,
    //     pageSize: 10
    // };


    //Gnews API
    const params = {
        q: "Martinique",
        lang: 'fr',
        from: "2022-08-24",          
        sortBy: "popularity",
        token: apiKey,
        page: page,
        max: 10
    };

    const {data} = await axios.get(urlApi,{params:params})

    console.log("API NEWS", data.articles);

    return data.articles;
 }
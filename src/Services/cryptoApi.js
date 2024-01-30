const BASE_URL ="https://api.coingecko.com/api/v3"
const API_KEY= "CG-UFiKNskan6NoVDzqiK8bUSUt"
const getdata = (page ,currency) =>{
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
}

const textdata = (text) =>{
    return `${BASE_URL}/search?query=${text}&x_cg_demo_api_key=${API_KEY}`
}


const marketChart = (id) =>{
    return `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`
}
export {getdata ,textdata , marketChart}
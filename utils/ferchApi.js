import axios from "axios"


export const baseUrl = "https://bayut.p.rapidapi.com"
export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ddb10c5a46msh4ea2d6db018fd35p10139fjsn7209c285d059',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data
}
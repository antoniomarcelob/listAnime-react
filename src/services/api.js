const BASE_URL = "https://api.jikan.moe/v4/anime"


const fetchData = async (endpoint) =>{ 
    const response = await fetch(`${BASE_URL}${endpoint}`)
                    .then(resp => resp.json())

    return response.data;
}

const getDataFunctions = {
    
    getTopAnimeList: async (limit) => {
        return {
            data: await fetchData(`?order_by=score&sort=desc&limit=${limit}`)
        }
    },
    getAllAnimeData: async () => {
        return [
        {
            data: await fetchData("")
        }
        ]
    }

}
    

export default getDataFunctions;
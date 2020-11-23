const API_KEY = '1d6689b24bdfcbc36c49ca216d10697e'

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_networks=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_networks=10749`,
    fetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_networks=99`,
}

export default requests;
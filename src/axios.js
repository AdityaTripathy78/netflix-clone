import axios from 'axios';

const instance = axios.create({
    //baseURL:"https://www.themoviedb.org/documentation/api"
    baseURL : "https://api.themoviedb.org/3/"
})

export default instance;
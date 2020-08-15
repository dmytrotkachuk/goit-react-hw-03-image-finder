import axios from 'axios'

const API_KEY = '16700707-990f3fa09f9144fb3f849d977'

const fetchImageWithQuery = (searchQuery , page ) => {

    return axios
    .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
}

export default{
    fetchImageWithQuery,
}
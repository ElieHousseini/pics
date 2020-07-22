import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID Ta9X58GeSAGV9FvTgtWqvYbZMf9aMkvcHhoIjENWC0Q'
    }
})
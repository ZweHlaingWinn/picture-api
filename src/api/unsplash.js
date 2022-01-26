import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID vg00Pc9bT7KRC0wHRC8ZNY7i0KqmKa8p7Qv5y5hvLh8'
    }
});

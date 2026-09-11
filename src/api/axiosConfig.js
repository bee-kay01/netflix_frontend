import axios from 'axios';

export default axios.create({
    baseURL:'http://3.216.27.229:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

import axios from 'axios';

export default axios.create({
    baseURL: 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})
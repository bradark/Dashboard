const API_URL = 'http://localhost:3000';
const axios = require('axios');

async function httpGetUser(){

    const config = {
        headers: 
   { 'postman-token': 'd43eaac7-7161-8141-a5c5-f6a46bea6189',
     'cache-control': 'no-cache' } 
    }

    return axios.get(`${API_URL}/auth/success`, config)
    .then(function (response) {
        console.log(response.data);
        return response.data;
    });
}

export {
    httpGetUser,
};
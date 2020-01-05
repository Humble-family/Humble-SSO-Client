import axios from 'axios';
import router from './router/index';

const URL = "http://localhost:3000/";

const client = axios.create({
    baseURL: URL,
    json: true
})

export default {
    async execute(method, resource, data) {
        //let accessToken = getAccessToken();
        return client({
            method,
            url: resource,
            data,
          /*  headers: {
                Authorization: `Bearer ${accessToken}`
            }*/
        }).then(req => {
            return req.data;
        }).catch(error => {
            if (error.response) {
                if (error.response.status === 404) {
                    router.push('/404');
                }
                return error.response.data;
            } else {
                return 'Server unreachable.';
            }
        });
    },
    getTranslations(){
        return this.execute('get', '/translations');
    }
}
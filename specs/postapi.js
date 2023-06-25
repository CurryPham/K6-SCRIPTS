    import http from 'k6/http';
    import { check } from 'k6';

    // export const options = {
    //     vus:10,
    //     duration: '5s',
    // }

    export default function(){
        const url = 'https://dummyjson.com/auth/login';
        const payload = JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
        });

        const params = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        

        const res = http.post(url, payload, params);
        check(res, {
            'is status 200': (r) => r.status === 200,
            'is res body has username': (r) => r.body.includes('kminchelle'),
        });

    }
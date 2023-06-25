    import http from 'k6/http';
    import { sleep } from 'k6';

    export const options = {
        insecureSkipTLSVerify: true,
        noConnectionReuse: false,
        stages: [
            { duration: '2m', target: 100}, // below normal load
            { duration: '5m', target: 100}, 
            { duration: '2m', target: 200}, // normal load
            { duration: '5m', target: 200}, 
            { duration: '2m', target: 300}, // around the breaking point
            { duration: '5m', target: 300}, 
            { duration: '2m', target: 400}, // beyond the breaking point
            { duration: '5m', target: 400}, 
            { duration: '2m', target: 0}, // scale down. Recovery stage.
        ]  
    };

    const API_BASE_URL = 'https://k6.io';

    export default function(){
        http.get(API_BASE_URL);
        sleep(1);
    }
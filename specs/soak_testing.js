    import http from 'k6/http';
    import { sleep } from 'k6';

    export const options = {
        insecureSkipTLSVerify: true,
        noConnectionReuse: false,
        stages: [
            { duration: '2m', target: 400}, // ramp up to 400 users
            { duration: '3h56m', target: 400}, // stay at 400 users for ~ 4 minutest
            { duration: '2m', target: 0}, // scale down. (optional)
        ]
    };

    const API_BASE_URL = 'https://k6.io';

    export default function(){
        http.get(API_BASE_URL);
        sleep(1);
    }
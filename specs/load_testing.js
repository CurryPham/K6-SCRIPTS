    import http from 'k6/http';
    import { sleep } from 'k6';

    export const options = {
        insecureSkipTLSVerify: true,
        noConnectionReuse: false,
        stages: [
            { duration: '5m', target: 100}, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes
            { duration: '10m', target: 100}, // stay at 100 users for 10 minutest
            { duration: '5s', target: 0}, // ramp-down to 0 users
        ],
        thresholds: {
            http_req_failed: ['rate<0.02'], // http errors should be less than 2%
            http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150s
          },
    };

    const API_BASE_URL = 'https://k6.io';

    export default function(){
        http.get(API_BASE_URL);
        sleep(1);
    }
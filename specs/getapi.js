    import http from 'k6/http';
    import { sleep } from 'k6';

    export const options = {
        executor: 'per-vur-iterations',
        vus:10,
        iteractions: 200,
        duration: '30s',
    }

    export default function(){
        http.get('https://k6.io');
        sleep(1);
    }